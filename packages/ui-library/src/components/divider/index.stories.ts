import { html } from 'lit-html';
import { BlrDividerType } from './index.js';
import { BlrDividerRenderFunction } from './renderFunction.js';
import '../../index.js';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { DividerVariations } from '../../globals/constants.js';

const sharedStyles = html`
  <style>
    .wrapper {
      margin-top: 5rem;
      width: 100%;
      justify-content: center;
      display: flex;
      height: 35rem;
    }
    .divider-container {
      padding-top: 2rem;
      width: 300px;
      height: 300px;
    }
  </style>
`;

export default {
  title: 'Components/Divider',
  argTypes: {
    direction: {
      description: 'Choose direction of the component.',
      options: DividerVariations,
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
  },
  parameters: {
    badges: ['New'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A127845&mode=dev',
    },
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `
  <markdown>
  Divider is used to separate or delineate different sections of a user interface. It's typically a horizontal or vertical line, often with a visual style like a solid line or a dashed line.

    - [**Appearance**](#appearance)
        - [**Direction**](#direction)
  </markdown>
`,
      },
    },
  },
};

export const Divider = (params: BlrDividerType) => {
  return html` ${sharedStyles}
    <div class="divider-container">${BlrDividerRenderFunction(params)}</div>`;
};
const defaultParams: BlrDividerType = {
  theme: 'Light',
  direction: 'horizontal',
};

Divider.args = defaultParams;

/**
 * ## Appearance
 * The only option to change the appearance of the Divider is the direction. The size of the Divider will be defined by the surounding element.
 ### Direction
 * The Divider component can have a horizontal or a vertical direction.
 */

export const Direction = () => {
  return html`
    ${sharedStyles}
    ${Divider({
      ...defaultParams,
      direction: 'horizontal',
    })}
    <div class="wrapper">
      ${Divider({
        ...defaultParams,
        direction: 'vertical',
      })}
    </div>
  `;
};

Direction.story = { name: ' ' };
