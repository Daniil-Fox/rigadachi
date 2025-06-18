export function initHistoryCards() {
  const historyCards = document.querySelectorAll(".history-item");
  if (historyCards.length > 0) {
    historyCards.forEach((card) => {
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.code === "Enter") {
          card.click();
        }
      });
    });
  }
}
