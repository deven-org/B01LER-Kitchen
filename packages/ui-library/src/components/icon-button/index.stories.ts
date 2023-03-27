/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrIconButton as BlrIconButtonClass } from './index';
import { IconKeys } from '@boiler/icons';
import { Sizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrIconButton',
  argTypes: {
    iconName: {
      options: [undefined, ...IconKeys],
      control: { type: 'select' },
    },
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    variant: {
      options: ['cta', 'primary', 'secondary', 'silent', 'destructive', 'encourage'],
      control: { type: 'select' },
    },
  },
};

export const BlrIconButton = ({
  ariaLabel,
  onClick,
  onBlur,
  disabled,
  buttonId,
  variant,
  size,
  iconName,
}: BlrIconButtonClass) =>
  html`
    <blr-icon-button
      .ariaLabel=${ariaLabel}
      .iconName=${iconName}
      .buttonId=${buttonId}
      .onClick=${onClick}
      .onBlur=${onBlur}
      .disabled=${disabled}
      .variant=${variant}
      .size=${size}
      class="example-layout-class"
    ></blr-icon-button>
  `;

BlrIconButton.storyName = 'BlrIconButton';

BlrIconButton.args = {
  ariaLabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  iconName: 'blrChevronDownMd',
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
};
