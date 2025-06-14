import { Swiper } from "swiper";
import { Navigation, Pagination } from "swiper/modules";

export const initAllSliders = () => {
  Swiper.use([Navigation, Pagination]);

  new Swiper(".infra__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,

    navigation: {
      prevEl: ".infra-prev",
      nextEl: ".infra-next",
    },
  });

  new Swiper(".history__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,

    navigation: {
      prevEl: ".history-prev",
      nextEl: ".history-next",
    },
  });

  new Swiper(".arch__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,

    navigation: {
      prevEl: ".arch-prev",
      nextEl: ".arch-next",
    },
  });

  new Swiper(".benefits__slider", {
    slidesPerView: "auto",
    spaceBetween: 20,

    navigation: {
      prevEl: ".benefits-prev",
      nextEl: ".benefits-next",
    },
  });
};
