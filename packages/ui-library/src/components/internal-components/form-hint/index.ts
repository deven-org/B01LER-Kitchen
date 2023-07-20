import { TemplateResult, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { SizesType } from '../../../globals/types';
import { BlrIconRenderFunction } from '../../icon';
import { IconType } from '@boiler/icons';

type HintVariant = 'hint' | 'error';

type FormHintType = {
  message?: string;
  icon?: IconType;
  variant: HintVariant;
  size: SizesType;
  children?: TemplateResult<1>;
};

export const BlrFormHint = ({ message, variant, icon, size, children }: FormHintType) => {
  const classes = classMap({
    [`${variant}`]: variant,
    [`${size}`]: size,
  });

  return html`
    <span class="blr-form-hint ${classes}">
      ${BlrIconRenderFunction({ icon, size, hideAria: true, disableDefaultClass: true })}
      <span class="blr-caption-text">${message}</span>
      ${children}
    </span>
  `;
};
