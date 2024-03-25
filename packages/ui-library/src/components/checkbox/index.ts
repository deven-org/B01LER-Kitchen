import { html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { TAG_NAME } from './renderFunction';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { formLight, formDark } from '../../foundation/semantic-tokens/form.css';
import { FormSizesType } from '../../globals/types';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { BlrIconRenderFunction } from '../icon/renderFunction';
import { checkboxLight, checkboxDark } from './index.css';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction';
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrCheckedChangeEvent,
  createBlrCheckedChangeEvent,
  createBlrBlurEvent,
  createBlrFocusEvent,
} from '../../globals/events';
import { LitElementCustom } from '../../utils/lit-element-custom';

export type BlrCheckboxEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrCheckedChange?: (event: BlrCheckedChangeEvent) => void;
};

/**
 * @fires blrFocus Checkbox received focus
 * @fires blrBlur Checkbox lost focus
 * @fires blrCheckedChange Checkbox state changed (event.checkState)
 */
export class BlrCheckbox extends LitElementCustom {
  static styles = [];

  @query('input')
  protected _checkboxNode!: HTMLInputElement;

  @property() label!: string;
  @property() checkInputId?: string = '';
  @property() arialabel?: string;

  @property() disabled?: boolean;
  @property() checked?: boolean;
  @property() indeterminate?: boolean;
  @property() readonly?: boolean;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType;
  @property() hasHint?: boolean;
  @property() hintIcon?: SizelessIconType;
  @property() hintMessage?: string;
  @property() hasLabel!: boolean;
  @property() name?: string;
  @property() checkedIcon?: SizelessIconType = 'blrCheckmark';
  @property() indeterminatedIcon?: SizelessIconType = 'blrMinus';

  @property() size?: FormSizesType = 'md';

  @property() theme: ThemeType = 'Light';

  @state() protected currentCheckedState: boolean | undefined = this.checked;
  @state() protected currentIndeterminateState: boolean | undefined = this.indeterminate;

  protected updated(changedProperties: Map<string, boolean>) {
    if (changedProperties.has('checked')) {
      this.currentCheckedState = this.checked || false;
    }

    if (changedProperties.has('indeterminate')) {
      this.currentIndeterminateState = this.indeterminate || false;
      if (this.indeterminate) {
        this.currentCheckedState = false;
      }
    }
  }

  protected handleChange(event: Event) {
    if (!this.disabled && !this.readonly) {
      this.currentIndeterminateState = false;

      this.dispatchEvent(
        createBlrCheckedChangeEvent({
          originalEvent: event,
          checkedState: this.currentCheckedState,
        })
      );
    }
  }

  @state() protected focused = false;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled && !this.readonly) {
      this.focused = true;

      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled && !this.readonly) {
      this.focused = false;

      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  @state() protected hovered = false;

  protected handleEnter = () => {
    if (!this.disabled && !this.readonly) {
      this.hovered = true;
    }
  };

  protected handleLeave = () => {
    if (!this.disabled && !this.readonly) {
      this.hovered = false;
    }
  };

  @state() protected active = false;

  protected handlePress = () => {
    if (!this.disabled && !this.readonly) {
      this.active = true;
      this.currentCheckedState = !this.currentCheckedState;
    }
  };

  protected handleRelease = () => {
    if (!this.disabled && !this.readonly) {
      this.active = false;
    }
  };

  protected render() {
    if (this.size && this.checkInputId) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, checkboxLight] : [formDark, checkboxDark];

      const classes = classMap({
        'blr-semantic-action': true,
        'blr-checkbox': true,
        'error': this.hasError || false,
        [`${this.size}`]: this.size,
      });

      const labelWrapperClasses = classMap({
        'label-wrapper': true,
        'error': this.hasError || false,
        'disabled': this.disabled || false,
        'focus': this.focused || false,
        'hover': this.hovered || false,
        'active': this.active || false,
        'checked': this.currentCheckedState || false,
        'readonly': this.readonly || false,
        'indeterminate': this.currentIndeterminateState || false,
      });

      const visualCheckboxClasses = classMap({
        'visual-checkbox': true,
        'error': this.hasError || false,
        'disabled': this.disabled || false,
        'hover': this.hovered || false,
        'active': this.active || false,
        'checked': this.currentCheckedState || false,
        'readonly': this.readonly || false,
        'indeterminate': this.currentIndeterminateState || false,
        'focus': this.focused || false,
      });

      const checkerIconClasses = classMap({
        'checker-icon': true,
      });

      const focusRingClasses = classMap({
        'focus-ring': true,
        'focus': this.focused || false,
      });

      const checkerIconSizeVariant = getComponentConfigToken([
        'cmp',
        'Checkbox',
        'Control',
        'Icon',
        'SizeVariant',
        this.size.toUpperCase(),
      ]).toLowerCase() as FormSizesType;

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: this.theme,
                  sizeVariant: this.size,
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
                  sizeVariant: this.size,
                  message: this.errorMessage,
                  icon: this.errorIcon,
                })}
              </div>
            `
          : nothing}
      `;

      return html`
        <style>
          ${dynamicStyles.map((style) => style)}
        </style>

        <div
          class="${classes}"
          @mouseenter=${this.handleEnter}
          @mouseleave=${this.handleLeave}
          @mousedown=${(event: MouseEvent) => {
            if (event.which === 1) {
              this.handlePress();
            }
          }}
          @mouseup=${this.handleRelease}
          @touchstart=${this.handlePress}
          @touchend=${this.handleRelease}
          @focusin=${this.handleFocus}
          @focusout=${this.handleBlur}
          @keydown=${(event: KeyboardEvent) => {
            if (event.code === 'Space') {
              this.handlePress();
            }
          }}
          @keyup=${(event: KeyboardEvent) => {
            if (event.code === 'Space') {
              this.handleRelease();
            }
          }}
          tabindex=${this.disabled ? nothing : '0'}
          aria-checked=${this.currentIndeterminateState ? 'mixed' : this.currentCheckedState}
          role="checkbox"
          aria-label=${this.label}
        >
          <input
            type="checkbox"
            class="input-control"
            tabindex="-1"
            aria-label="${this.arialabel}"
            id=${this.checkInputId || nothing}
            name=${this.name || nothing}
            ?disabled=${this.disabled}
            ?checked=${this.currentCheckedState}
            ?indeterminate=${this.currentIndeterminateState}
            ?readonly=${this.readonly}
            ?hasError=${this.hasError}
            @change=${this.handleChange}
            aria-hidden="true"
          />

          <label class="${visualCheckboxClasses}" for="${this.checkInputId}" aria-hidden="true" tabindex="-1">
            ${this.currentIndeterminateState
              ? BlrIconRenderFunction(
                  {
                    icon: calculateIconName(this.indeterminatedIcon, checkerIconSizeVariant),
                    classMap: checkerIconClasses,
                  },
                  {
                    'aria-hidden': true,
                  }
                )
              : BlrIconRenderFunction(
                  {
                    icon: calculateIconName(this.checkedIcon, checkerIconSizeVariant),
                    classMap: checkerIconClasses,
                  },
                  {
                    'aria-hidden': true,
                  }
                )}

            <div class="${focusRingClasses}"></div>
          </label>

          <div class="${labelWrapperClasses}" aria-hidden="true" tabindex="-1">
            ${this.hasLabel
              ? html`${BlrFormLabelInlineRenderFunction({
                  labelText: this.label,
                  forValue: this.checkInputId,
                  labelSize: this.size,
                })}`
              : nothing}
            ${this.hasHint || this.hasError
              ? BlrFormCaptionGroupRenderFunction({ sizeVariant: this.size }, captionContent)
              : nothing}
          </div>
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrCheckbox);
}

export type BlrCheckboxType = Omit<BlrCheckbox, keyof LitElementCustom> & BlrCheckboxEventHandlers;
