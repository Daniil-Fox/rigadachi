import { throttle } from "../functions/throttle.js";
export function initHeader() {
  const header = document.querySelector(".header");

  const checkTop = () => {
    if (window.scrollY > 0) {
      header.classList.add("header--fixed");
    } else {
      header.classList.remove("header--fixed");
    }
  };

  const f = throttle(checkTop, 50);
  if (header) {
    window.addEventListener("scroll", f);
  }
}
