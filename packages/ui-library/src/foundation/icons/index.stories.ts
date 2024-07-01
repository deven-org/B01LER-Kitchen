import { html } from 'lit-html';
import { IconKeys } from '@boiler/icons';
import { BlrIconType } from '../../components/icon/index.js';
import { BlrIconRenderFunction } from '../../components/icon/renderFunction.js';

import { Sizes } from '../../globals/constants.js';
import { getIconName } from '../../utils/get-icon-name.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { classMap } from 'lit/directives/class-map.js';
import { SizesType } from '../../globals/types.js';
import { Themes } from '../_tokens-generated/index.themes.js';

// this loads the all components instances and registers their html tags
import '../../index.js';

export default {
  title: 'Foundation/Icons',
  argTypes: {
    sizeVariant: {
      options: Sizes,
      description: 'Select size of the component.',
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    arialabel: {
      name: 'ariaLabel',
      control: { type: 'text' },
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
    },
  },
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=947%3A31105&mode=dev',
    },
    viewMode: 'docs',
  },
};

const allIcons = getIconName(IconKeys);

export const Icon = (params: BlrIconType) => {
  const classes = classMap({
    'icon-gallery-layout': true,
  });

  return html`<div class="icon-gallery row-fluid">
    <ul class="icon-gallery icon-thumbnails">
      ${allIcons.map((icon) => {
        return html`<li>
          ${BlrIconRenderFunction({
            icon: calculateIconName(icon as string, params.sizeVariant as SizesType),
            sizeVariant: params.sizeVariant,
            classMap: classes,
          })}
          <span class="icon-label">${icon}</span>
        </li>`;
      })}
    </ul>
  </div>`;
};

const defaultParams: BlrIconType = {
  theme: 'Light',
  sizeVariant: 'lg',
  arialabel: 'Icons',
};

Icon.args = defaultParams;
