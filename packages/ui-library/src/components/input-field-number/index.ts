import { LitElement, TemplateResult, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { baseStyle, wrapperLight, wrapperDark, StepperComboDark, StepperComboLight } from './index.css';
import { classMap } from 'lit-html/directives/class-map.js';
import { TAG_NAME } from './renderFunction';
import { BlrDividerRenderFunction } from '../divider/renderFunction';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { actionLight, actionDark } from '../../foundation/semantic-tokens/action.css';
import { FormSizesType } from '../../globals/types';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction';
import { BlrIconRenderFunction } from '../icon/renderFunction';

export class BlrInputFieldNumber extends LitElement {
  static styles = [baseStyle];

  @query('input')
  protected _numberFieldNode!: HTMLInputElement;

  @property() inputFieldNumberId!: string;
  @property() stepperVariant: 'split' | 'horizontal' | 'vertical' = 'split';
  @property() label!: string;
  @property() disabled?: boolean;
  @property() placeholder?: string;
  @property() readonly?: boolean;
  @property() required?: boolean;
  @property() hasLabel?: boolean;
  @property() size?: FormSizesType = 'md';
  @property() labelAppendix?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType;
  @property() hasHint = true;
  @property() hintMessage?: string;
  @property() hintIcon?: SizelessIconType;
  @property() value?: number;
  @property() step?: number;
  @property() unit?: string;
  @property() leadingZeros?: number;
  @property() decimals?: number;
  @property() prependUnit?: boolean;
  @property() stepIncreaseAriaLabel?: string = '+';
  @property() stepDecreaseAriaLabel?: string = '\u2212'; // minus-sign (not minus-hyphen)

  @property() theme: ThemeType = 'Light';

  @state() protected currentValue = 0;

  protected stepperUp() {
    if (this.currentValue !== undefined && this.step !== undefined) {
      this.currentValue += Number(this.step);
      this.requestUpdate('currentValue');
    }
  }

  protected stepperDown() {
    if (this.currentValue !== undefined && this.step !== undefined) {
      this.currentValue -= Number(this.step);
      this.requestUpdate('currentValue');
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.currentValue = Number(this.currentValue) || Number(this.value) || 0;
  }

  protected handleChange() {
    this.currentValue = Number(this._numberFieldNode.value) || 0;
  }

  protected customFormat(cur: number, fractions: number, digits: number): string {
    const formattedNumber = cur.toFixed(fractions);
    const [integerPart, fractionPart] = formattedNumber.split('.');

    let paddedInteger = integerPart;
    if (digits > 0) {
      paddedInteger = '0'.repeat(digits) + integerPart;
    }
    return `${paddedInteger}${fractionPart ? `.${fractionPart}` : ''}`;
  }

  protected getStepperButtonTemplate(direction: 'increase' | 'decrease', icon: SizelessIconType): TemplateResult<1> {
    if (!this.size) {
      return html``;
    }

    const ariaLabel = direction === 'increase' ? this.stepIncreaseAriaLabel! : this.stepDecreaseAriaLabel!;
    const onClick = direction === 'increase' ? this.stepperUp : this.stepperDown;

    const iconSizeVariant = getComponentConfigToken([
      'cmp',
      'StepperButton',
      'Icon',
      'SizeVariant',
      this.size.toUpperCase(),
    ]).toLowerCase() as FormSizesType;

    const buttonClass = classMap({
      'custom-stepper-button': true,
      [iconSizeVariant]: true,
      [this.stepperVariant]: true,
    });

    const iconClasses = classMap({
      noPointerEvents: true,
    });

    const button = html`
      <button
        aria-label=${ariaLabel}
        aria-controls=${this.inputFieldNumberId}
        ?disabled="${this.disabled}"
        class="${buttonClass}"
        @click=${onClick}
      >
        ${BlrIconRenderFunction(
          {
            classMap: iconClasses,
            icon: calculateIconName(icon, iconSizeVariant),
            sizeVariant: iconSizeVariant,
            fillParent: false,
          },
          {
            'aria-hidden': true,
          }
        )}
      </button>
    `;
    return button;
  }

  protected renderMode() {
    switch (this.stepperVariant) {
      case 'split': {
        return html`
          ${this.getStepperButtonTemplate('decrease', 'blrMinus')}
          ${this.getStepperButtonTemplate('increase', 'blrPlus')}
        `;
      }
      case 'horizontal': {
        return html`
          <div class="stepper-combo horizontal  ${this.size}">
            ${this.getStepperButtonTemplate('decrease', 'blrMinus')}
            ${BlrDividerRenderFunction({
              direction: 'vertical',
              theme: this.theme,
            })}
            ${this.getStepperButtonTemplate('increase', 'blrPlus')}
          </div>
        `;
      }
      case 'vertical': {
        return html`
          <div class="stepper-combo vertical  ${this.size}">
            ${this.getStepperButtonTemplate('increase', 'blrChevronUp')}
            ${BlrDividerRenderFunction({
              direction: 'horizontal',
              theme: this.theme,
            })}
            ${this.getStepperButtonTemplate('decrease', 'blrChevronDown')}
          </div>
        `;
      }
    }
  }

  protected render() {
    const hasUnit = this.unit !== undefined && this.unit.length > 0;

    if (this.size) {
      const dynamicStyles =
        this.theme === 'Light'
          ? [wrapperLight, actionLight, StepperComboLight]
          : [wrapperDark, actionDark, StepperComboDark];

      const inputClasses = classMap({
        [this.size]: this.size,
        prepend: hasUnit && !!this.prependUnit,
      });

      const unitClasses = classMap({
        unit: true,
        prepend: hasUnit && !!this.prependUnit,
        [`${this.size}`]: this.size,
        [this.stepperVariant || 'split']: this.stepperVariant || 'split',
      });

      const wrapperClasses = classMap({
        'input-wrapper': true,
        'disabled': this.disabled || false,
        [`${this.size}`]: this.size,
        [this.stepperVariant || 'split']: this.stepperVariant || 'split',
        'error-input': this.hasError || false,
        'prepend': hasUnit && !!this.prependUnit,
        'readonly': this.readonly || false,
      });

      const inputAndUnitContainer = classMap({
        'input-unit-container': true,
        'prepend': hasUnit && !!this.prependUnit,
        [`${this.size}`]: this.size,
        [this.stepperVariant || 'split']: this.stepperVariant || 'split',
      });

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: this.theme,
                  size: this.size,
                  message: this.hintMessage,
                  icon: this.hintIcon,
                })}
              </div>
            `
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorIcon)
          ? html`
              <div class="error-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'error',
                  theme: this.theme,
                  size: this.size,
                  message: this.errorMessage,
                  icon: this.errorIcon,
                })}
              </div>
            `
          : nothing}
      `;

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <div class="blr-input-field-number ${this.size}">
          ${this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    label: this.label,
                    sizeVariant: this.size,
                    labelAppendix: this.labelAppendix,
                    forValue: this.inputFieldNumberId,
                    theme: this.theme,
                    hasError: Boolean(this.hasError),
                  })}
                </div>
              `
            : nothing}
          <div class="${wrapperClasses}">
            <div class="${inputAndUnitContainer}">
              <input
                id="${this.inputFieldNumberId}"
                class="${inputClasses}"
                type="number"
                .value=${this.currentValue != 0
                  ? this.customFormat(this.currentValue || 0, this.decimals || 0, this.leadingZeros || 0)
                  : nothing}
                step="${this.step || nothing}"
                ?disabled="${this.disabled}"
                ?readonly="${this.readonly}"
                ?required="${this.required}"
                hasError="${this.hasError}"
                @change=${this.handleChange}
                placeholder=${this.placeholder || nothing}
              />
              ${hasUnit ? html` <div class="${unitClasses}">${this.unit}</div> ` : nothing}
            </div>
            ${this.renderMode()}
          </div>
        </div>

        ${this.hasHint || this.hasError
          ? BlrFormCaptionGroupRenderFunction({ size: this.size }, captionContent)
          : nothing}
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrInputFieldNumber);
}

export type BlrInputFieldNumberType = Omit<BlrInputFieldNumber, keyof LitElement>;
