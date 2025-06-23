import '../blocks/carousel/carousel.css';
import decorate from '../blocks/carousel/carousel.js';
import '../styles/styles.css';
import CarouselPng1 from './png/carousel1.png';


export default {
  title: 'EDS Blocks/Carousel',
};

const template = `
<div class="carousel-wrapper"><div class="carousel block" data-block-name="carousel" data-block-status="loaded" id="carousel-2" role="region" aria-roledescription="Carousel"><div class="carousel-slides-container"><ul class="carousel-slides"><li data-slide-index="0" id="carousel-2-slide-0" class="carousel-slide" aria-labelledby="ullamcorper-sit-amet-ligula"><div class="carousel-slide-image">
              <picture>
                <img loading="lazy" alt="" src="${CarouselPng1}">
              </picture>
            </div><div class="carousel-slide-content">
              <h2 id="ullamcorper-sit-amet-ligula"><strong>Ullamcorper sit amet ligula</strong></h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
              <p class="button-container"><a href="https://en.wikipedia.org/wiki/HTTPS" title="Nulla facilisi" class="button"><u>Nulla facilisi</u></a></p>
            </div></li></ul></div>
          
        </div></div>

`;


export const CarouseSingle = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'carousel block';
  wrapper.innerHTML = template;
  decorate(wrapper);

  return wrapper;
};