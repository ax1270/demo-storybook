import '../blocks/banner/banner.css';
import decorate from '../blocks/banner/banner.js';
import '../styles/styles.css';
import BannerPng1 from './png/banner.png';


export default {
  title: 'EDS Blocks/Banner',
};

const template = `
<div class="banner-wrapper"><div class="banner block" data-block-name="banner" data-block-status="loaded" id="banner-2" role="region" aria-roledescription="banner"><div class="banner-slides-container"><ul class="banner-slides"><li data-slide-index="0" id="banner-2-slide-0" class="banner-slide" aria-labelledby="ullamcorper-sit-amet-ligula"><div class="banner-slide-image">
              <picture>
                <img loading="lazy" alt="" src="${BannerPng1}">
              </picture>
            </div><div class="banner-slide-content">
              <h2 id="ullamcorper-sit-amet-ligula"><strong>Ullamcorper sit amet ligula</strong></h2>
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
              <p class="button-container"><a href="https://en.wikipedia.org/wiki/HTTPS" title="Nulla facilisi" class="button"><u>Nulla facilisi</u></a></p>
            </div></li></ul></div>
          
        </div></div>

`;


export const CarouseSingle = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'banner block';
  wrapper.innerHTML = template;
  decorate(wrapper);

  return wrapper;
};