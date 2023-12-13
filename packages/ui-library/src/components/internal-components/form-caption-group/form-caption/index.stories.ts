/* eslint-disable no-console */
import { PureIconKeys } from '@boiler/icons';
import { FormSizes, CaptionVariants } from '../../../../globals/constants';
import { BlrFormCaptionRenderFunction, BlrFormCaptionType } from './index';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Internal Components/FormCaptionGroup/FormCaption',
  argTypes: {
    icon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    variant: {
      options: CaptionVariants,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrFormCaption = (params: BlrFormCaptionType) => BlrFormCaptionRenderFunction(params);

BlrFormCaption.storyName = 'FormCaption';

const args: BlrFormCaptionType = {
  theme: 'Light',
  message: 'hallo',
  arialabel: 'Form Hint',
  icon: 'blr360',
  variant: 'hint',
  size: 'sm',
};

BlrFormCaption.args = args;
