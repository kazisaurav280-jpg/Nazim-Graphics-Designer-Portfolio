/* ==========================================================================
   Kazi Nazim — portfolio interactions (vanilla JS, no dependencies)
   1. Mobile navigation
   2. Active nav link on scroll
   3. Skills ticker (seamless marquee)
   4. Testimonials carousel
   5. Newsletter form validation
   6. Contact form (validation + growing message box)
   7. Letter hover stretch on [data-letters] headings
   ========================================================================== */
(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* ---------- 1. Mobile navigation ---------- */
  function initNav() {
    const navbar = document.querySelector(".navbar");
    const toggle = document.querySelector(".navbar__toggle");
    const nav = document.getElementById("site-nav");
    if (!navbar || !toggle || !nav) return;

    const setOpen = (open) => {
      navbar.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close after choosing a link
    nav.addEventListener("click", (e) => {
      if (e.target.closest("a")) setOpen(false);
    });

    // Escape closes and returns focus to the toggle
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navbar.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    // Click outside closes
    document.addEventListener("click", (e) => {
      if (navbar.classList.contains("is-open") && !navbar.contains(e.target)) setOpen(false);
    });

    // Reset when resizing back to desktop
    window.matchMedia("(min-width: 901px)").addEventListener("change", (e) => {
      if (e.matches) setOpen(false);
    });
  }

  /* ---------- 2. Active nav link on scroll ---------- */
  function initScrollSpy() {
    // Only in-page links (#section) take part; links to other pages keep their state.
    const links = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
    const sections = links
      .map((link) => document.querySelector(link.getAttribute("href")))
      .filter(Boolean);
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const setActive = (id) => {
      links.forEach((link) => {
        const active = link.getAttribute("href") === "#" + id;
        link.classList.toggle("is-active", active);
        if (active) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));
  }

  /* ---------- 3. Skills ticker ---------- */
  function initTicker() {
    const track = document.querySelector(".ticker__track");
    if (!track) return;

    // Duplicate the items once so translateX(-50%) loops seamlessly.
    Array.from(track.children).forEach((item) => {
      const clone = item.cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    });
    track.classList.add("is-animated");
  }

  /* ---------- 4. Testimonials carousel ----------
     Shows `--visible` cards (2 on desktop, 1 on tablet/mobile, set in CSS).
     Prev/next move one card at a time and wrap around. */
  function initCarousel() {
    const list = document.querySelector("[data-carousel]");
    const prev = document.querySelector("[data-carousel-prev]");
    const next = document.querySelector("[data-carousel-next]");
    if (!list || !prev || !next) return;

    const slides = Array.from(list.children);
    let start = 0;

    const visibleCount = () => {
      const value = parseInt(getComputedStyle(list).getPropertyValue("--visible"), 10);
      return Math.max(1, Math.min(Number.isNaN(value) ? 2 : value, slides.length));
    };

    const render = (animate) => {
      const count = visibleCount();
      slides.forEach((slide) => {
        slide.hidden = true;
        slide.classList.remove("is-entering");
        slide.style.order = "";
      });
      for (let i = 0; i < count; i++) {
        const slide = slides[(start + i) % slides.length];
        slide.hidden = false;
        slide.style.order = String(i);
        if (animate && !prefersReducedMotion.matches) {
          void slide.offsetWidth; // restart the animation
          slide.classList.add("is-entering");
        }
      }
      // With every card already visible there's nothing to rotate on wide screens,
      // but rotating still reorders them, so the buttons stay active when > 1 slide.
      const disabled = slides.length < 2;
      prev.disabled = disabled;
      next.disabled = disabled;
    };

    const go = (step) => {
      start = (start + step + slides.length) % slides.length;
      render(true);
    };

    prev.addEventListener("click", () => go(-1));
    next.addEventListener("click", () => go(1));

    // Keyboard arrows while focus is inside the carousel region
    list.parentElement.addEventListener("keydown", (e) => {
      if (e.target.closest("input, textarea")) return;
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    });

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => render(false), 120);
    });

    render(false);
  }

  /* ---------- 5. Newsletter form ----------
     Front-end only for now: validates on blur/submit and confirms. */
  function initNewsletter() {
    const form = document.querySelector(".newsletter");
    if (!form) return;
    const input = form.querySelector(".newsletter__input");
    const msg = form.querySelector(".newsletter__msg");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const setState = (state, text) => {
      form.classList.toggle("is-invalid", state === "invalid");
      form.classList.toggle("is-success", state === "success");
      input.setAttribute("aria-invalid", String(state === "invalid"));
      msg.textContent = text || "";
    };

    const validate = () => {
      const value = input.value.trim();
      if (!value) return "Add your email address to subscribe.";
      if (!emailPattern.test(value)) return "That email looks incomplete. Check it and try again.";
      return "";
    };

    input.addEventListener("blur", () => {
      if (!input.value.trim()) return setState(null);
      const error = validate();
      setState(error ? "invalid" : null, error);
    });

    // Clear the error as soon as the value becomes valid
    input.addEventListener("input", () => {
      if (form.classList.contains("is-invalid") && !validate()) setState(null);
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const error = validate();
      if (error) {
        setState("invalid", error);
        input.focus();
        return;
      }
      setState("success", "Thanks! You're on the list.");
      form.reset();
    });
  }

  /* ---------- 6. Contact form (contact.html) ----------
     Prototype only: checks the required fields and shows a confirmation.
     Nothing is sent yet. To go live, send `new FormData(form)` to a form
     service in the marked spot below. */
  function initContactForm() {
    const form = document.querySelector(".contact-form");
    if (!form) return;
    const status = form.querySelector(".contact-form__status");
    const message = form.querySelector("textarea");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    // Message box starts one line tall and grows with its content.
    const grow = () => {
      message.style.height = "auto";
      message.style.height = message.scrollHeight + "px";
    };
    message.addEventListener("input", grow);

    const rules = {
      name: (v) => (v ? "" : "Tell me your name."),
      email: (v) =>
        !v ? "Add your email so I can reply." :
        !emailPattern.test(v) ? "That email looks incomplete. Check it and try again." : "",
      message: (v) => (v ? "" : "Write a short message about your project."),
    };

    const check = (input) => {
      const rule = rules[input.name];
      if (!rule) return "";
      const error = rule(input.value.trim());
      const field = input.closest(".field");
      field.classList.toggle("is-invalid", Boolean(error));
      input.setAttribute("aria-invalid", String(Boolean(error)));
      field.querySelector(".field__error").textContent = error;
      return error;
    };

    Object.keys(rules).forEach((name) => {
      const input = form.elements[name];
      // Validate after the visitor leaves a field they've typed in…
      input.addEventListener("blur", () => { if (input.value.trim()) check(input); });
      // …and clear an error as soon as it's fixed.
      input.addEventListener("input", () => {
        status.textContent = "";
        if (input.closest(".field").classList.contains("is-invalid")) check(input);
      });
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const invalid = Object.keys(rules)
        .map((name) => form.elements[name])
        .filter((input) => check(input));
      if (invalid.length) {
        status.textContent = "";
        invalid[0].focus();
        return;
      }

      // >>> Send the form here when a backend or form service is connected.

      form.reset();
      grow();
      status.textContent = "Thanks! Your message has been sent.";
    });
  }

  /* ---------- 7. Letter hover (headings with data-letters) ----------
     Splits the text into one span per letter so each can stretch on hover.
     Screen readers get the whole phrase from aria-label. */
  function initLetterHover() {
    document.querySelectorAll("[data-letters]").forEach((heading) => {
      const text = heading.textContent.trim();
      heading.setAttribute("aria-label", text);
      const words = text.split(/\s+/).map((word) => {
        const wordEl = document.createElement("span");
        wordEl.className = "word";
        wordEl.setAttribute("aria-hidden", "true");
        for (const char of word) {
          const letter = document.createElement("span");
          letter.className = "letter";
          letter.dataset.char = char;
          letter.textContent = char;
          wordEl.appendChild(letter);
        }
        return wordEl;
      });
      heading.replaceChildren();
      words.forEach((wordEl, i) => {
        if (i) heading.append(" ");
        heading.append(wordEl);
      });
      heading.classList.add("is-split");
    });
  }

  initNav();
  initLetterHover();
  initScrollSpy();
  initTicker();
  initCarousel();
  initNewsletter();
  initContactForm();
})();
