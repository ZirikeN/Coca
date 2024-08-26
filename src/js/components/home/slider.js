import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/scss/autoplay';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay, EffectFade, Scrollbar } from 'swiper/modules';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    slidesPerView: 'auto',
    spaceBetween: 34,
    centeredSlides: true,
    loop: true,
    modules: [Navigation],

    breakpoints: {
      769: {
        centeredSlides: false,
      },
    },

    navigation: {
      nextEl: '.insight__article-button-next',
      prevEl: '.insight__article-button-prev',
    },
  });
};

export const usePartnersSlider = () => {
  new Swiper('.partners__slider', {
    slidesPerView: 1,
    spaceBetween: 18,
    loop: true,
    modules: [Autoplay],

    autoplay: {
      delay: 2000,
    },

    breakpoints: {
      577: {
        slidesPerView: 3,
      },
      380: {
        slidesPerView: 2,
        spaceBetween: 12,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 'auto',
    spaceBetween: 22,
    loop: true,
    // effect: "fade",
    // fadeEffect: {
    //   crossFade: true
    // },

    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  });
};

export const useAboutSlider = () => {
  new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 50,
    centeredSlides: true,

    breakpoints: {
      1201: {
        slidesPerView: 2,
        spaceBetween: -100,
        centeredSlides: false
      },
      993: {
        slidesPerView: 1,
        spaceBetween: -430,
        centeredSlides: false,
      },
      769:{
        slidesPerView: 1.4
      },
      577:{
        spaceBetween: 50,
      }
    },
  });
};

export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 22,

    breakpoints: {
      769:{
        slidesPerView: 3,
        spaceBetween: 33,
      },
      577:{
        slidesPerView: 2,
        spaceBetween: 22,
      }
    },

    navigation: {
      nextEl: '.articles-button-next',
      prevEl: '.articles-button-prev',
    },
  });
};

export const useTeamHeroSlider = () => {
  new Swiper('.hero__slider', {
    modules: [Scrollbar],
    slidesPerView: 1,
    spaceBetween: 22,

    scrollbar: {
      el: ".hero__scrollbar",
    },

    breakpoints: {
      993:{
        slidesPerView: 3,
        spaceBetween: 32,
      },
      769:{
        slidesPerView: 2,
        spaceBetween: 22,
      },
    }
  });
};

export const useTeamWorkSlider = () => {
  new Swiper('.workers__slider', {
    slidesPerView: 1,
    spaceBetween: 25,
    centeredSlides: true,
    loop: true,

    breakpoints: {
      993:{
        slidesPerView: 3,
        spaceBetween: 32,
        centeredSlides: false,
      },
      769:{
        slidesPerView: 2,
      }
    }
  });
};
