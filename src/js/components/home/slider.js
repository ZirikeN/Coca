import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/scss/autoplay';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

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

export const useTestimonialsSlider = () =>{
  new Swiper('.testimonials__slider', {
    modules: [Navigation, EffectFade],
    slidesPerView: 'auto',
    spaceBetween: 22,
    // loop: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },

    navigation: {
      nextEl: '.testimonials__btn--next',
      prevEl: '.testimonials__btn--prev',
    },
  })
}
