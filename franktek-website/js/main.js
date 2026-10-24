/* ==========================================================================
   FRANKTEK ENGINEERING SERVICES — Site JS
   Two jobs only: mobile menu toggle, and quote-form submission.
   No frameworks, no build step — edit directly if needed.
   ========================================================================== */

(function () {
  "use strict";

  /* ---- Mobile menu ---- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");
  var body = document.body;

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.classList.toggle("is-active", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
      body.classList.toggle("menu-open", isOpen);
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("is-open");
        toggle.classList.remove("is-active");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
        body.classList.remove("menu-open");
      });
    });
  }

  /* ---- Quote form submission (Web3Forms) ----
     Replace WEB3FORMS_ACCESS_KEY below with your real key from
     https://web3forms.com (free — no account needed, just an email
     to confirm). Full steps are in SITE-MANAGEMENT-GUIDE.md.
     Until it's replaced, the form will show a friendly error and the
     WhatsApp button remains available as a working fallback. */
  var WEB3FORMS_ACCESS_KEY = "REPLACE_WITH_YOUR_WEB3FORMS_ACCESS_KEY";

  document.querySelectorAll(".quote-form form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      var successEl = form.parentElement.querySelector(".form-success");
      var errorEl = form.parentElement.querySelector(".form-error");
      var submitBtn = form.querySelector('button[type="submit"]');

      if (successEl) successEl.classList.remove("is-visible");
      if (errorEl) errorEl.classList.remove("is-visible");

      if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY.indexOf("REPLACE_WITH") === 0) {
        if (errorEl) {
          errorEl.textContent = "This form isn't connected yet — please reach us on WhatsApp instead, or try again soon.";
          errorEl.classList.add("is-visible");
        }
        return;
      }

      var formData = new FormData(form);
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);

      var originalLabel = submitBtn ? submitBtn.textContent : "";
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = "Sending…";
      }

      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      })
        .then(function (res) { return res.json(); })
        .then(function (data) {
          if (data.success) {
            form.reset();
            if (successEl) successEl.classList.add("is-visible");
          } else if (errorEl) {
            errorEl.textContent = "Something went wrong sending your message. Please try WhatsApp instead.";
            errorEl.classList.add("is-visible");
          }
        })
        .catch(function () {
          if (errorEl) {
            errorEl.textContent = "Something went wrong sending your message. Please try WhatsApp instead.";
            errorEl.classList.add("is-visible");
          }
        })
        .finally(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.textContent = originalLabel;
          }
        });
    });
  });
})();
