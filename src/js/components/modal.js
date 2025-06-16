export const initModals = () => {
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");

  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modalId = button.getAttribute("data-modal-open");
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add("modal--open");
        document.body.style.overflow = "hidden";
      }
    });
  });

  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const modal = button.closest(".modal");
      if (modal) {
        modal.classList.remove("modal--open");
        document.body.style.overflow = null;
      }
    });
  });

  window.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal")) {
      event.target.classList.remove("modal--open");
      document.body.style.overflow = null;
    }
  });
};
