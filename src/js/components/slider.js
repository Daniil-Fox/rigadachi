import { Swiper } from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

export const initAllSliders = () => {
  Swiper.use([Navigation, Pagination, Thumbs]);

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

  // new Swiper(".stories__slider", {
  //   slidesPerView: 1,
  //   centeredSlides: true,
  //   spaceBetween: 40,
  //   loopedSlides: 15,
  //   watchSlidesProgress: true,
  //   loop: true,
  //   navigation: {
  //     prevEl: ".stories-prev",
  //     nextEl: ".stories-next",
  //   },
  // });

  const infraSlider = document.querySelectorAll(".modal-infra__body");
  if (infraSlider.length > 0) {
    infraSlider.forEach((slider) => {
      const swiper = slider.querySelector(".modal-infra__slider");
      const btnPrev = slider.querySelector(".modal-infra-prev");
      const btnNext = slider.querySelector(".modal-infra-next");
      new Swiper(swiper, {
        slidesPerView: "auto",
        spaceBetween: 10,

        breakpoints: {
          320: {
            slidesPerView: "auto",
            spaceBetween: 10,
          },
          769: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        },
        navigation: {
          prevEl: btnPrev,
          nextEl: btnNext,
        },
      });
    });
  }

  const modalBuild = document.querySelectorAll(".modal-build");
  if (modalBuild.length > 0) {
    modalBuild.forEach((modal) => {
      const sliderMain = modal.querySelector(".modal-build__slider");
      const sliderThumbs = modal.querySelector(".modal-build__thumbs");
      const prevBtn = modal.querySelector(".gallery-btn-prev");
      const nextBtn = modal.querySelector(".gallery-btn-next");

      const thumbs = new Swiper(sliderThumbs, {
        slidesPerView: "auto",
        spaceBetween: 12,
      });

      const mainsl = new Swiper(sliderMain, {
        slidesPerView: 1,
        spaceBetween: 20,
        thumbs: {
          swiper: thumbs,
        },
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn,
        },
      });
    });
  }

  // Owl

  const owl = $(".owl-carousel").owlCarousel({
    loop: true,
    center: true,
    autoWidth: true,
    nav: false,
  });

  $(".stories__btn--prev").click(function () {
    owl.trigger("prev.owl.carousel");
  });
  $(".stories__btn--next").click(function () {
    owl.trigger("next.owl.carousel");
  });

  $(window).on("resize", function () {
    $(".owl-carousel").trigger("refresh.owl.carousel");
  });

  // Открытие owl-carousel на нужном слайде по клику на .history-item
  $(document).on(
    "click",
    ".history-item[data-modal-open='stories']",
    function () {
      const index = $(this).closest(".swiper-slide").index();
      // Открываем модалку (если не открыта)
      const modal = document.getElementById("stories");
      if (modal && !modal.classList.contains("modal--open")) {
        modal.classList.add("modal--open");
        document.body.style.overflow = "hidden";
      }
      // Переключаем owl-carousel на нужный слайд
      const owl = $("#stories .owl-carousel");
      owl.trigger("to.owl.carousel", [index, 0, true]);
    }
  );
};
