import { LitElement, html, nothing } from 'lit';
import { ClassMapDirective, classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { FormSizesType } from '../../globals/types';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';

import { IconType } from '@boiler/icons';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { DirectiveResult } from 'lit-html/directive';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

type Option = {
  value: string;
  label: string;
  selected?: boolean;
  disabled?: boolean;
};

@customElement('blr-select')
export class BlrSelect extends LitElement {
  static styles = [styleCustom];

  @property() selectId!: string;
  @property() labelAppendix?: string;
  @property() name!: string;
  @property() hasLabel?: boolean;
  @property() label!: string;
  @property() disabled?: boolean;
  @property() size: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property({ type: Array }) options: Option[] = [];
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hint?: string;
  @property() hintIcon: IconType = 'blrInfoSm';
  @property() showTrailingIcon?: boolean;
  @property() trailingIcon: IconType = 'blr360Sm';

  @property() theme: ThemeType = 'Light';

  protected renderTrailingIcon(classes: DirectiveResult<typeof ClassMapDirective>) {
    if (this.showTrailingIcon) {
      if (this.hasError) {
        return html`${BlrIconRenderFunction({
          icon: 'blrErrorFilledSm',
          size: this.size,
          classMap: classes,
          hideAria: true,
          disablePointerEvents: true,
        })}`;
      } else {
        return html`${BlrIconRenderFunction({
          icon: calculateIconName(this.trailingIcon, this.size),
          size: this.size,
          classMap: classes,
          hideAria: true,
          disablePointerEvents: true,
        })}`;
      }
    }

    return nothing;
  }

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight] : [formDark];

    const inputClasses = classMap({
      'error': this.hasError || false,
      'error-input': this.hasError || false,
      [`${this.size || 'md'}`]: this.size || 'md',
    });

    const iconClasses = classMap({
      'blr-input-icon': true,
      [`${this.size || 'md'}`]: this.size || 'md',
    });

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="blr-select">
        ${this.hasLabel
          ? BlrFormLabelRenderFunction({
              labelText: this.label,
              labelAppendix: this.labelAppendix,
              labelSize: this.size,
              forValue: this.selectId,
              theme: this.theme,
            })
          : nothing}
        <div class="blr-input-inner-container ${inputClasses}">
          <select
            class="blr-form-element ${inputClasses}"
            id=${this.selectId || nothing}
            name=${this.name || nothing}
            ?disabled=${this.disabled}
            ?required=${this.required}
            @change=${this.onChange}
          >
            ${this.options?.map((opt: Option) => {
              return html`<option
                class="blr-select-option"
                id=${opt.value}
                value=${opt.value}
                ?selected=${opt.selected}
                ?disabled=${opt.disabled}
              >
                ${opt.label}
              </option>`;
            })}
          </select>

          ${this.renderTrailingIcon(iconClasses)}
        </div>
        <div class="hint-wrapper ${this.size}">
          ${BlrFormHintRenderFunction({
            message: (this.hasError ? this.errorMessage : this.hint) || 'This is dummy message',
            variant: this.hasError ? 'error' : 'hint',
            size: 'sm',
            icon: this.hintIcon,
            theme: this.theme,
          })}
        </div>
      </div> `;
  }
}

export type BlrSelectType = Omit<BlrSelect, keyof LitElement>;

export const BlrSelectRenderFunction = ({
  selectId,
  labelAppendix,
  name,
  hasLabel,
  label,
  disabled,
  size,
  required,
  onChange,
  options,
  hasError,
  errorMessage,
  hint,
  hintIcon,
  showTrailingIcon,
  trailingIcon,
  theme,
}: BlrSelectType) => {
  return html`<blr-select
    .selectId=${selectId}
    .name=${name}
    .disabled=${disabled}
    .size=${size}
    .required=${required}
    .onChange=${onChange}
    .errorMessage=${errorMessage}
    .hint=${hint}
    .hintIcon=${hintIcon}
    .hasError=${hasError}
    .options=${options}
    .labelAppendix=${labelAppendix}
    .showTrailingIcon=${showTrailingIcon}
    .trailingIcon=${trailingIcon}
    .hasLabel=${hasLabel}
    .label=${label}
    .theme=${theme}
  ></blr-select>`;
};
