import '../blocks/columns/columns.css';
import decorate from '../blocks/columns/columns.js';
import '../styles/styles.css';
import * as aemScripts from '../scripts/aem.js';
import * as scripts from '../scripts/scripts.js';

import ColumnsPng1 from './png/columns1.png';
import ColumnsPng2 from './png/columns2.png';
import ColumnsPng3 from './png/columns3.png';
import ColumnsPng4 from './png/columns4.png';
import ColumnsPng5 from './png/columns5.png';


export default {
  title: 'EDS Blocks/Columns'
};

const template = `
<div class="columns-wrapper">
  <div class="columns block columns-2-cols" data-block-name="columns" data-block-status="loaded">
          <div>
            <div>
              <p>Columns block</p>
              <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
              <p class="button-container"><a href="/" title="Live" class="button"><u>Live</u></a></p>
            </div>
            <div class="columns-img-col">
              <picture>
                  <img loading="lazy" alt="" src="${ColumnsPng1}">
              </picture>
            </div>
          </div>
          <div>
            <div class="columns-img-col">
              <picture>
                  <img loading="lazy" alt="" src="${ColumnsPng2}">
              </picture>
            </div>
            <div>
              <p>Or you can just view the preview</p>
              <p class="button-container"><em><a href="/" title="Preview" class="button secondary"><u>Preview</u></a></em></p>
            </div>
          </div>
        </div>
    </div>
</div>

`;

const template2 = `
  <div>
      <div>
        <p>Columns block</p>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
        </ul>
        <p><a href="/"><u>Live</u></a></p>
      </div>
      <div>
        <picture>
          <img loading="lazy" alt="" src="${ColumnsPng1}">
        </picture>
      </div>
    </div>
    <div>
      <div>
        <picture>
          <img loading="lazy" alt="" src="${ColumnsPng2}">
        </picture>
      </div>
      <div>
        <p>Or you can just view the preview</p>
        <p><em><a href="/"><u>Preview</u></a></em></p>
      </div>
    </div>
  </div>

`;


const template3 = `
<div class="columns-wrapper"><div class="columns block columns-3-cols" data-block-name="columns" data-block-status="loaded">
          <div>
            <div>
              <p>
                <picture>
                  <img loading="lazy" alt="" src="${ColumnsPng3}">
                </picture>
              </p>
              <h2 id="column-1"><strong>Column 1</strong></h2>
              <p>This and that</p>
            </div>
            <div>
              <p>
                <picture>
                  <img loading="lazy" alt="" src="${ColumnsPng4}">
                </picture>
              </p>
              <h2 id="column-2"><strong>Column 2</strong></h2>
              <p>This and that</p>
            </div>
            <div>
              <p>
                <picture>
                  <img loading="lazy" alt="" src="${ColumnsPng5}">
                </picture>
              </p>
              <h2 id="column-3"><strong>Column 3</strong></h2>
              <p>This and that</p>
            </div>
          </div>
        </div>
    </div>

`;


export const ColumnsTwoColumns = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'columns block';
  wrapper.innerHTML = template2;
  
  // まずボタンのjs
  aemScripts.decorateButtons(wrapper);
  
  // Columnsのjs
  decorate(wrapper);

  return wrapper;
};

export const ColumnsThreeColumns = () => {
  const wrapper = document.createElement('div');
  wrapper.className = 'columns block';
  wrapper.innerHTML = template3;
  decorate(wrapper);

  return wrapper;
};
