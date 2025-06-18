export function initClickAbout() {
  const aboutItems = document.querySelectorAll(".about__img");

  if (aboutItems.length > 0) {
    aboutItems.forEach((item) => {
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.code === "Enter") {
          item.click();
        }
      });
    });
  }
}
