import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export const useInsightSlider = () => {
    new Swiper('.insight__slider', {
        slidesPerView: 'auto',
        spaceBetween: 34,
        centeredSlides: true,
        loop: true,
        modules: [Navigation],

        breakpoints:{
            769:{
                centeredSlides: false
            }
        },

        navigation: {
            nextEl: '.insight__article-button-next',
            prevEl: '.insight__article-button-prev',
        },
    });
};
