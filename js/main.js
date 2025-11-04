// Main JS for multipage scaffold

// Mobile navigation toggle (reusable for pages)
function initNavToggle(toggleId, navId) {
  const btn = document.getElementById(toggleId);
  const nav = document.getElementById(navId);
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const visible = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", visible);
    // simple class toggles; CSS will handle show/hide
  });
}

// Initialize toggles for different pages (IDs are present in the HTML pages)
document.addEventListener("DOMContentLoaded", () => {
  initNavToggle("navToggle", "primaryNav");
  initNavToggle("navToggleAbout", "primaryNavAbout");
  initNavToggle("navToggleServices", "primaryNavServices");
  initNavToggle("navToggleContact", "primaryNavContact");

  // Contact form validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const valid = validateContactForm();
      if (valid) {
        const success = document.getElementById("contact-success");
        success.textContent = "Thanks — your message was sent (demo only).";
        contactForm.reset();
      }
    });
  }
});

// Simple validation logic for contact form (returns boolean)
function validateContactForm() {
  let ok = true;
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  const nameErr = document.getElementById("error-name");
  const emailErr = document.getElementById("error-email");
  const messageErr = document.getElementById("error-message");

  // reset
  nameErr.textContent = "";
  emailErr.textContent = "";
  messageErr.textContent = "";

  if (!name || name.value.trim().length < 2) {
    nameErr.textContent = "Please enter your name (2+ characters).";
    ok = false;
  }

  if (!email || !/^\S+@\S+\.\S+$/.test(email.value)) {
    emailErr.textContent = "Please enter a valid email address.";
    ok = false;
  }

  if (!message || message.value.trim().length < 10) {
    messageErr.textContent = "Please enter a message (10+ characters).";
    ok = false;
  }

  return ok;
}
