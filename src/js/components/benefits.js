const benefits = document.querySelectorAll(".benefit");

if (benefits.length > 0 && window.innerWidth < 1024) {
  benefits.forEach((item) => {
    item.addEventListener("click", (e) => {
      benefits.forEach((el) => el.classList.remove("benefit--active"));
      item.classList.add("benefit--active");
    });
    item.addEventListener("mouseenter", (e) => {
      benefits.forEach((el) => el.classList.remove("benefit--active"));
      item.classList.add("benefit--active");
    });
    item.addEventListener("mouseleave", (e) => {
      benefits.forEach((el) => el.classList.remove("benefit--active"));
      item.classList.add("benefit--active");
    });
  });
}
