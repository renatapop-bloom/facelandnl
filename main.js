/* Faceland sandbox guide interactions */

const EXPECTED_PASSWORD = "faceland2026";

function normalizePassword(value) {
  return (value ?? "").trim();
}

function setUnlocked(unlocked) {
  const passwordScreen = document.getElementById("password-screen");
  const app = document.getElementById("app");

  if (!passwordScreen || !app) return;

  if (unlocked) {
    passwordScreen.hidden = true;
    app.hidden = false;
  } else {
    passwordScreen.hidden = false;
    app.hidden = true;
  }
}

function setPasswordError(message) {
  const errorEl = document.getElementById("passwordError");
  if (!errorEl) return;
  errorEl.textContent = message || "";
}

function attemptUnlock() {
  const input = document.getElementById("accessPassword");
  const value = normalizePassword(input?.value);

  if (value === EXPECTED_PASSWORD) {
    setPasswordError("");
    setUnlocked(true);
    return;
  }

  setPasswordError("Incorrect password.");
}

function wirePasswordScreen() {
  const button = document.getElementById("enterButton");
  const input = document.getElementById("accessPassword");

  if (button) button.addEventListener("click", attemptUnlock);

  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") attemptUnlock();
    });

    input.addEventListener("input", () => setPasswordError(""));
  }
}

function closeAccordionItem(item) {
  const panel = item.querySelector(".accordion-panel");
  const icon = item.querySelector(".accordion-icon");
  const header = item.querySelector(".accordion-header");

  item.classList.remove("is-open");
  if (header) header.setAttribute("aria-expanded", "false");
  if (panel) panel.style.maxHeight = "0px";
  if (icon) icon.textContent = "+";
}

function openAccordionItem(item) {
  const panel = item.querySelector(".accordion-panel");
  const icon = item.querySelector(".accordion-icon");
  const header = item.querySelector(".accordion-header");

  item.classList.add("is-open");
  if (header) header.setAttribute("aria-expanded", "true");
  if (panel) panel.style.maxHeight = `${panel.scrollHeight}px`;
  if (icon) icon.textContent = "–";
}

function wireAccordion() {
  const accordion = document.getElementById("accordion");
  if (!accordion) return;

  const items = Array.from(accordion.querySelectorAll(".accordion-item"));
  for (const item of items) {
    const header = item.querySelector(".accordion-header");
    const panel = item.querySelector(".accordion-panel");

    if (header) {
      header.setAttribute("type", "button");
      header.setAttribute("aria-expanded", "false");
    }

    if (panel) panel.style.maxHeight = "0px";

    header?.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");
      if (isOpen) {
        closeAccordionItem(item);
        return;
      }

      for (const other of items) closeAccordionItem(other);
      openAccordionItem(item);
    });
  }

  // Keep the currently open panel height correct on resize.
  window.addEventListener("resize", () => {
    const openItem = accordion.querySelector(".accordion-item.is-open");
    if (!openItem) return;
    const panel = openItem.querySelector(".accordion-panel");
    if (!panel) return;
    panel.style.maxHeight = `${panel.scrollHeight}px`;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Lock by default on load.
  setUnlocked(false);
  wirePasswordScreen();
  wireAccordion();
});
