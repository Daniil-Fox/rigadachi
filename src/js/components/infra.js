export function initInfraCards() {
  const cards = document.querySelectorAll(".infra-item");
  if (cards.length > 0) {
    cards.forEach((card) => {
      const text = card.querySelector(".infra-item__desc");
      card.addEventListener("mouseenter", (e) => {
        text.style.maxHeight = text.scrollHeight + "px";
      });
      card.addEventListener("mouseleave", (e) => {
        text.style.maxHeight = null;
      });
      card.addEventListener("focus", (e) => {
        text.style.maxHeight = text.scrollHeight + "px";
      });
      card.addEventListener("blur", (e) => {
        text.style.maxHeight = null;
      });
    });
  }
}
