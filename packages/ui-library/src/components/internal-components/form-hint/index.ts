import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { FormSizesType, HintVariantType } from '../../../globals/types';
import { BlrIconRenderFunction } from '../icon';
import { IconType } from '@boiler/icons';
import { form } from '../../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../../utils/calculate-icon-name';

@customElement('blr-form-hint')
export class BlrFormHint extends LitElement {
  static styles = [form];

  @property() message?: string;
  @property() icon?: IconType;
  @property() variant: HintVariantType = 'hint';
  @property() size: FormSizesType = 'md';
  @property() childElement?: TemplateResult<1>;

  protected render() {
    const classes = classMap({
      'blr-form-hint': true,
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size,
    });

    const iconClasses = classMap({
      'blr-icon': true,
      [`${this.size}`]: this.size || 'md',
    });

    return html`<div class=${classes}>
      <div class="icon-wrapper">
        ${BlrIconRenderFunction({
          icon: calculateIconName(this.icon, 'sm'),
          size: 'sm',
          classMap: iconClasses,
          hideAria: true,
        })}
      </div>
      <div class="label-wrapper">
        <span class="blr-caption-text">${this.message}</span>
      </div>
      ${this.childElement}
    </div>`;
  }
}

export type BlrFormHintType = Omit<BlrFormHint, keyof LitElement>;

export const BlrFormHintRenderFunction = ({ message, icon, variant, size, childElement }: BlrFormHintType) => {
  return html`<blr-form-hint
    .message=${message}
    .icon=${icon}
    .variant=${variant}
    .size=${size}
    .childElement=${childElement}
  ></blr-form-hint>`;
};
