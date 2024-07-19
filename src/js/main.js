import '../assets/scss/main.scss';

// component
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { useInsightSlider } from './components/home/slider';
import { usePartnersSlider } from './components/home/slider';
import { useTestimonialsSlider } from './components/home/slider';

useTheme();
useBurger();
useInsightSlider();
usePartnersSlider();
useTestimonialsSlider();
