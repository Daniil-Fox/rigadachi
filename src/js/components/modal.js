export const initModals = () => {
  const openButtons = document.querySelectorAll("[data-modal-open]");
  const closeButtons = document.querySelectorAll("[data-modal-close]");

  openButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      let modal = null;
      if (
        window.innerWidth > 768 &&
        button.getAttribute("data-modal-prevent")
      ) {
        const preventId = button.getAttribute("data-modal-prevent");
        const mbform = document.getElementById(preventId);

        if (mbform) {
          const closeBtn = mbform.querySelector(".mb-form__close");

          let isActive = mbform.classList.toggle("active");
          mbform.style.maxHeight = isActive ? mbform.scrollHeight + "px" : null;

          closeBtn?.addEventListener("click", (e) => {
            e.preventDefault();
            mbform.classList.remove("active");
            mbform.style.maxHeight = null;
          });
        }
      } else {
        const modalId = button.getAttribute("data-modal-open");
        modal = document.getElementById(modalId);
      }
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
