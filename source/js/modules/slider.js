export const initTeamSlider = () => {
  const teamSwiper = new Swiper('.team__swiper', {
    direction: 'horizontal',
    loop: true,

    navigation: {
      nextEl: '.team__next-btn',
      prevEl: '.team__prev-btn',
    },

    maxBackfaceHiddenSlides: 0,

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    },
  });
};

export const initFeadbackSlider = () => {
  const feadbackSwiper = new Swiper('.feadback__swiper', {
    navigation: {
      nextEl: '.feadback__next-btn',
      prevEl: '.feadback__prev-btn',
    },

    slidesPerView: 1,
  });
};
