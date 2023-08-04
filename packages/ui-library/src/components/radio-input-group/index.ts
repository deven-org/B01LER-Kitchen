import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { radioDark, radioLight } from '../../foundation/component-tokens/radio.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { BlrFormLabelInline } from '../form-label-inline';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { IconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';

@customElement('blr-radio-group')
export class BlrRadioGroup extends LitElement {
  static styles = [styleCustom];

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;
  @property() name?: string;
  @property() size: InputSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorIcon?: IconType;
  @property() hideLabel!: boolean;
  @property() options!: RadioOption[];
  @property() layout!: boolean;
  @property() showHint = true;
  @property() hintIcon: IconType = 'blrInfoSm';
  @property() errorMessage?: string;
  @property() showGroupErrorMessage = true;
  @property() groupErrorMessage?: string;
  @property() groupErrorIcon?: IconType;

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight, radioLight] : [formDark, radioDark];

    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
      [`checked`]: this.checked || false,
      [`error`]: this.hasError || false,
      [`${this.layout}`]: this.layout,
    });

    const calculateOptionId = (label: string) => {
      return label.replace(/ /g, '_').toLowerCase();
    };

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="blr-radio-group ${classes}">
        ${this.options &&
        this.options.map((option: RadioOption) => {
          const id = calculateOptionId(option.label);
          return html`
            <div class="blr-radio ${classes}">
              <input
                id=${id || nothing}
                class="${classes} input-control"
                type="radio"
                name=${this.name}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?aria-disabled=${this.disabled}
                ?invalid=${this.hasError}
                ?aria-invalid=${this.hasError}
                ?checked=${this.checked}
                ?required=${this.required}
                @input=${this.onChange}
                @blur=${this.onBlur}
                @focus=${this.onFocus}
              />
              <div class="label-wrapper">
                ${option.label
                  ? html`${BlrFormLabelInline({ labelText: option.label, forValue: this.id, labelSize: this.size })}`
                  : nothing}
                ${this.showHint
                  ? html`
                      <div class="hint-wrapper">
                        ${BlrFormHintRenderFunction({
                          message: option.hintMessage,
                          variant: 'hint',
                          size: this.size,
                          icon: this.hintIcon ? this.hintIcon : undefined,
                          theme: this.theme,
                        })}
                      </div>
                    `
                  : html``}
                ${this.hasError
                  ? html`
                      <div class="error-wrapper">
                        ${BlrFormHintRenderFunction({
                          message: option.errorMessage,
                          variant: 'error',
                          size: this.size,
                          icon: this.errorIcon ? this.errorIcon : undefined,
                          theme: this.theme,
                        })}
                      </div>
                    `
                  : html``}
              </div>
            </div>
          `;
        })}
        ${this.hasError && this.showGroupErrorMessage
          ? html`
              <div class="group-error ${classes}">
                ${BlrFormHintRenderFunction({
                  message: this.groupErrorMessage || '',
                  variant: 'error',
                  size: this.size,
                  icon: this.groupErrorIcon ? this.groupErrorIcon : undefined,
                  theme: this.theme,
                })}
              </div>
            `
          : html``}
      </div> `;
  }
}

export type BlrRadioGroupType = Omit<BlrRadioGroup, keyof LitElement>;

export const BlrRadioGroupRenderFunction = ({
  disabled,
  checked,
  size,
  name,
  required,
  readonly,
  onChange,
  onBlur,
  onFocus,
  hasError,
  errorIcon,
  options,
  layout,
  showHint,
  hintIcon,
  hideLabel,
  showGroupErrorMessage,
  groupErrorMessage,
  groupErrorIcon,
  theme,
}: BlrRadioGroupType) => {
  return html`<blr-radio-group
    class="example-layout-class"
    .disabled=${disabled}
    .checked=${checked}
    .size=${size}
    .name=${name}
    .required=${required}
    .readonly=${readonly}
    @input=${onChange}
    @blur=${onBlur}
    @focus=${onFocus}
    .hasError=${hasError}
    .errorIcon=${errorIcon}
    .options=${options}
    .layout=${layout}
    .showHint=${showHint}
    .hintIcon=${hintIcon}
    .hideLabel=${hideLabel}
    .showGroupErrorMessage=${showGroupErrorMessage}
    .groupErrorMessage=${groupErrorMessage}
    .groupErrorIcon=${groupErrorIcon}
    .theme=${theme}
  ></blr-radio-group>`;
};
