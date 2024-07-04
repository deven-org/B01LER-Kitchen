import { BlrFormCaptionGroupType } from './index.js';
import { BlrFormCaptionGroupRenderFunction } from './renderFunction.js';
import { html } from 'lit-html';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { FormSizes } from '../../globals/constants.js';
import '../../index.js';

export default {
  title: 'Components/Form Caption Group',
  argTypes: {
    sizeVariant: {
      options: FormSizes,
      control: { type: 'radio' },
      description:
        ' Choose size of the component. The size variant influences the spacing between the two Form Captions.',
      table: {
        category: 'Appearance',
      },
    },
  },
  parameters: {
    badges: ['New'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=8273%3A7564&mode=dev',
    },
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
        The Form Caption Group is a combination of two Form Caption components, which allow to show both a hint and an error message or only one of each. 

Technically both instances of the Form Caption are placed inside slots that are stacked above each other. The Form Caption Group only has one property named size to change the spacing in between the slots depending on the size of the component. For more information have a look at the internal [Form Caption](?path=/docs/components-form-caption--docs)  component

The Form Caption Group is intended to be used when creating new components. Currently, it is used like this in the following components:
        
- [**Checkbox**](?path=/docs/components-checkbox--docs)
- [**Input Field Number**](?path=/docs/components-input-field-number--docs)
- [**Input Field Text**](?path=/docs/components-input-field-text--docs)
- [**Radio**](?path=/docs/components-radio--docs)
- [**Radio Group**](?path=/docs/components-radio-group--docs)
- [**Select**](?path=/docs/components-select--docs)
- [**Text Area**](?path=/docs/components-text-area--docs)

It is not intended to use the Form Caption Group directly when creating new applications.
      </Markdown>
      `,
      },
    },
  },
};

const hintCaption = BlrFormCaptionRenderFunction({
  message: 'Hint-Message-Text',
  variant: 'hint',
  icon: 'blrInfo',
  theme: 'Light',
});

const errorCaption = BlrFormCaptionRenderFunction({
  message: 'Error-Message-Text',
  variant: 'error',
  icon: 'blrErrorFilled',
  theme: 'Light',
});

const mixedCaptions = html` ${hintCaption} ${errorCaption} `;

export const BlrFormCaptionGroup = (params: BlrFormCaptionGroupType) =>
  BlrFormCaptionGroupRenderFunction(params, mixedCaptions);

BlrFormCaptionGroup.storyName = 'Form Caption Group';

const args: BlrFormCaptionGroupType = {
  sizeVariant: 'sm',
  theme: 'Light',
};

BlrFormCaptionGroup.args = args;
