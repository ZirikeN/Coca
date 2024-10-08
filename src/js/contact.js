import '/scss/contact.scss';

// component
import { useTheme } from './components/theme';
import { useBurger } from './components/burger';
import { usePartnersSlider } from './components/home/slider';
import { usePhone } from './components/contact/phone';
import { useMap } from './components/contact/map';

useMap();
useTheme();
useBurger();
usePartnersSlider();
usePhone();