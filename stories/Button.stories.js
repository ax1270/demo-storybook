import '../styles/styles.css';
import { decorateButtons } from '../scripts/aem.js';


export default {
  title: 'Button'
};


export const ButtonDefault = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<p><a href="https://www.adobe.com/">Button Default</a></p>`;
  decorateButtons(wrapper);
  return wrapper;
};


export const ButtonPrimary = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<p><strong><a href="https://www.adobe.com/"><u>Button Primary</u></a></strong></p>`;
  decorateButtons(wrapper);
  return wrapper;
};


export const ButtonSecondary = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<p><em><a href="https://www.adobe.com/"><u>Button Secondary</u></a></em></p>`;
  decorateButtons(wrapper);
  return wrapper;
};


export const ButtonTertiary = () => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = `<p><strong><em><a href="https://www.adobe.com/"><u>Button Tertiary</u></a></em></strong></p>`;
  decorateButtons(wrapper);
  return wrapper;
};
