/* ============================================================
   SANTIAGO BUCEO PROFESIONAL — main.js
   Handles: navbar scroll, mobile menu, FAQ accordion,
            scroll-reveal, form submit → WhatsApp
   ============================================================ */

(function () {
  "use strict";

  /* ---- NAVBAR SCROLL ---- */
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 60);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- MOBILE MENU ---- */
  const toggle = document.querySelector(".nav__toggle");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      toggle.classList.toggle("active", open);
      document.body.style.overflow = open ? "hidden" : "";
    });
    // Close on any link click
    mobileMenu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        toggle.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
    // Close on Escape
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
        mobileMenu.classList.remove("open");
        toggle.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
  }

  /* ---- FAQ ACCORDION ---- */
  document.querySelectorAll(".faq-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".faq-item");
      const answer = item.querySelector(".faq-answer");
      const wasOpen = item.classList.contains("open");

      // Close all
      document.querySelectorAll(".faq-item.open").forEach((el) => {
        el.classList.remove("open");
        el.querySelector(".faq-answer").classList.remove("open");
      });

      // Toggle clicked
      if (!wasOpen) {
        item.classList.add("open");
        answer.classList.add("open");
      }
    });
  });

  /* ---- SCROLL REVEAL (IntersectionObserver) ---- */
  const revealEls = document.querySelectorAll(
    ".reveal, .reveal-left, .reveal-right",
  );
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" },
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---- ACTIVE NAV LINK (highlight current page) ---- */
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__link").forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (href === path || (path === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });

  /* ---- CONTACT FORM → WHATSAPP ---- */
  document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nombre = form.querySelector('[name="nombre"]')?.value.trim() || "";
      const telefono =
        form.querySelector('[name="telefono"]')?.value.trim() || "";
      const eslora = form.querySelector('[name="eslora"]')?.value.trim() || "";
      const unidad =
        form.querySelector('[name="unidad_eslora"]')?.value || "pies";
      const ubicacion =
        form.querySelector('[name="ubicacion"]')?.value.trim() || "";
      const mensaje =
        form.querySelector('[name="mensaje"]')?.value.trim() || "";

      // Build checked services list
      const checks = [];
      form.querySelectorAll('input[type="checkbox"]:checked').forEach((cb) => {
        checks.push(cb.value);
      });

      let text = `Hola Santiago, vi vuestra web y me interesa contratar un servicio.`;
      if (nombre) text += `\n\nNombre: ${nombre}`;
      if (telefono) text += `\nTeléfono: ${telefono}`;
      if (eslora) text += `\nEslora: ${eslora} ${unidad}`;
      if (ubicacion) text += `\nUbicación: ${ubicacion}`;
      if (checks.length) text += `\nServicios de interés: ${checks.join(", ")}`;
      if (mensaje) text += `\n\n${mensaje}`;

      window.open(
        `https://wa.me/573006394572?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer",
      );
    });
  });

  /* ---- STATS COUNTER ANIMATION ---- */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const isDecimal = !Number.isInteger(target);
    const suffix = el.dataset.suffix || "";
    const duration = 1800;
    const start = performance.now();

    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const value = target * eased;
      const num = isDecimal ? value.toFixed(1) : Math.round(value);
      el.innerHTML = suffix
        ? `${num}<span class="stat__sfx">${suffix}</span>`
        : `${num}`;
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const statsIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          statsIO.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 },
  );

  document
    .querySelectorAll(".stat__value[data-target]")
    .forEach((el) => statsIO.observe(el));

  /* ---- SUBSCRIPTION PLAN SELECTOR ---- */
  document.querySelectorAll(".sub-plan").forEach((plan) => {
    plan.addEventListener("click", () => {
      plan
        .closest(".subscription-plans")
        ?.querySelectorAll(".sub-plan")
        .forEach((p) => p.classList.remove("active"));
      plan.classList.add("active");
    });
  });
})();
