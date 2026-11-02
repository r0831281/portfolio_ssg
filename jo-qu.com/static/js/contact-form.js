document.querySelectorAll(".contact-form").forEach((form) => {
  const status = form.querySelector(".contact-form-status");
  const button = form.querySelector("button[type='submit']");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    button.disabled = true;
    button.setAttribute("aria-busy", "true");
    status.textContent = form.dataset.sending;
    status.classList.remove("is-error", "is-success");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Request failed");
      }

      form.reset();
      window.turnstile?.reset();
      status.textContent = form.dataset.success;
      status.classList.remove("is-error");
      status.classList.add("is-success");
    } catch (error) {
      console.error("Contact form submission failed", error);
      status.textContent = form.dataset.error;
      status.classList.remove("is-success");
      status.classList.add("is-error");
      window.turnstile?.reset();
    } finally {
      button.disabled = false;
      button.removeAttribute("aria-busy");
    }
  });
});
