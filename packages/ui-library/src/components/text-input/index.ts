import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { InputTypes, InputSizesType } from '../../globals/types';
import { BlrFormLabel } from '../form-label';
import { BlrFormHint } from '../form-hint';
import { IconType } from '@boiler/icons';
import { semanticTokens } from '../../foundation/_tokens-generated/index.generated';

@customElement('blr-text-input')
export class BlrTextInput extends LitElement {
  static styles = [styleCustom, form];

  @property() textInputId!: string;
  @property() type!: InputTypes;
  @property() label!: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() size?: InputSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() maxLength?: number;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hint?: string;
  @property() hintIcon?: IconType;

  render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
    });

    const inputclasses = classMap({
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
    });

    return html`
      <div class="blr-input ${classes}">
        ${BlrFormLabel({ labelText: this.label, labelSize: this.size || 'md' })}
        <input
          class="blr-text-input ${inputclasses}"
          id=${this.textInputId}
          type="${this.type}"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @input="${this.onChange}"
          @blur="${this.onBlur}"
          @focus="${this.onFocus}"
          maxlength="${this.maxLength}"
          pattern="${this.pattern}"
          hasError="${this.hasError}"
        />
        ${BlrFormHint({
          message: this.hasError ? this.errorMessage : this.hint,
          variant: this.hasError ? 'error' : 'hint',
          iconName: this.hintIcon,
        })}
      </div>
    `;
  }
}
