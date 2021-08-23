/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Header from '../../blocks/base/header/header';
import Slider from '../../blocks/base/slider/slider';

window.onload = () => {
  Slider();

  document.addEventListener('click', (e) => {
    Header(e);
  });
};
