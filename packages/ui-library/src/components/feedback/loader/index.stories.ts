import { BlrLoaderType, BlrLoaderRenderFunction } from './index';
import { FeedbackSizes, FeedbackVariants } from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { html } from 'lit-html';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .size-container {
      position: relative;
      width: 100px;
      height: 100px;
      margin: 0.5rem;
    }
  </style>
`;

//Default parameters for Loader component
const defaultParams: BlrLoaderType = {
  theme: 'Light',
  variant: 'default',
  size: 'md',
  loadingStatus: 'Loading',
};

export default {
  title: 'Design System/Web Components/Feedback/Loader',
  argTypes: {
    //Appearance
    variant: {
      description: 'Choose variant of the component.',
      options: FeedbackVariants,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    size: {
      name: 'sizeVariant',
      description: 'Choose size of the component.',
      options: FeedbackSizes,
      control: { type: 'radio' },
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
    loadingStatus: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
Loader’s primary purpose is to provide feedback to the user that the application has not frozen or become unresponsive but is actively processing data or performing an action.
- [**Appearance**](#appearance)
 - [**Variant**](#variant) 
 - [**Size Variant**](#size-variant) 
</Markdown>`,
      },
    },
  },
};

//Main Component for Loader
export const BlrLoader = (params: BlrLoaderType) => BlrLoaderRenderFunction(params);
BlrLoader.storyName = 'Loader';
BlrLoader.args = defaultParams;

// All Stories
//Appearance Variant/ Size Variant
/**
 * ## Appearance
 * ### Variant
 * The Loader component comes in 2 variants: default and inverted. The inverted variant should be used to in cases the default variant does not have a good visibility.
 * #### Variant: Default
 */
export const Variant = () => {
  return html`
    ${sharedStyles}
    ${BlrLoaderRenderFunction({
      ...defaultParams,
      theme: 'Light',
      variant: 'default',
      size: 'md',
      loadingStatus: 'Loading',
    })}
  `;
};
Variant.story = { name: ' ' };
/**
 * #### Variant: Inverted
 */
export const Inverted = () => {
  return html`
    ${sharedStyles}
      ${BlrLoaderRenderFunction({
        ...defaultParams,
        variant: 'default',
        size: 'md',
        loadingStatus: 'Loading',
      })}
    </div>
  `;
};
Inverted.story = { name: ' ' };
Inverted.parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: 'hsla(216, 9%, 10%, 1)' }],
  },
};

/**
 * The Loader component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    ${FeedbackSizes.map(
      (size) =>
        html`<div class="size-container">
          ${BlrLoaderRenderFunction({
            ...defaultParams,
            size: size,
          })}
        </div>`
    )}
  `;
};
