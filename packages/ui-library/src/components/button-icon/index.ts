/* eslint-disable no-console */
import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property, state } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { TAG_NAME } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { actionLight, actionDark } from '../../foundation/semantic-tokens/action.css';
import { ActionVariantType, ActionSizesType, FormSizesType, SizesType } from '../../globals/types';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { BlrIconRenderFunction } from '../icon/renderFunction';
import { BlrLoaderRenderFunction } from '../loader/renderFunction';
import {
  BlrBlurEvent,
  BlrClickEvent,
  BlrFocusEvent,
  createBlrBlurEvent,
  createBlrClickEvent,
  createBlrFocusEvent,
} from '../../globals/events';
import { LitElementCustom } from '../../utils/lit-element-custom';

export type BlrButtonIconEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrClick?: (event: BlrClickEvent) => void;
};

/**
 * @fires blrFocus Button received focus
 * @fires blrBlur Button lost focus
 * @fires blrClick Button was clicked
 */
export class BlrButtonIcon extends LitElementCustom {
  static styles = [styleCustom];

  @property() arialabel!: string;
  @property() icon?: SizelessIconType;
  @property() loading?: boolean;
  @property() disabled!: boolean;
  @property() buttonIconId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() sizeVariant?: ActionSizesType = 'md';

  @property() theme: ThemeType = 'Light';

  @state() protected focused = false;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.focused = true;
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.focused = false;
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  protected handleClick = (event: MouseEvent | KeyboardEvent) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrClickEvent({ originalEvent: event }));
    }
  };

  protected render() {
    if (this.sizeVariant) {
      const dynamicStyles = this.theme === 'Light' ? [actionLight] : [actionDark];

      const classes = classMap({
        [this.variant]: this.variant,
        [this.sizeVariant]: this.sizeVariant,
        disabled: this.disabled,
        loading: this.loading || false,
      });

      const iconClasses = classMap({
        icon: true,
      });

      const loaderVariant = determineLoaderVariant(this.variant);

      const loaderSizeVariant = getComponentConfigToken([
        'sem',
        'buttons',
        'loader',
        'sizevariant',
        this.sizeVariant,
      ]).toLowerCase() as FormSizesType;

      const iconSizeVariant = getComponentConfigToken([
        'cmp',
        'ButtonIcon',
        'Icon',
        'SizeVariant',
        this.sizeVariant.toUpperCase(),
      ]).toLowerCase() as SizesType;

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <span
          aria-label=${this.arialabel || nothing}
          class="blr-semantic-action blr-button-icon ${classes}"
          aria-disabled=${this.disabled ? 'true' : nothing}
          @click=${this.handleClick}
          id=${this.buttonIconId || nothing}
          tabindex=${this.disabled ? nothing : '0'}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          role="button"
          @keydown=${(event: KeyboardEvent) => {
            if (event.code === 'Space') {
              this.handleClick(event);
            }
          }}
        >
          ${this.focused && !this.loading ? html`<span class="focus-layer"></span>` : nothing}
          ${this.loading
            ? BlrLoaderRenderFunction({
                sizeVariant: loaderSizeVariant,
                variant: loaderVariant,
                theme: this.theme,
              })
            : nothing}
          ${BlrIconRenderFunction(
            {
              icon: calculateIconName(this.icon, iconSizeVariant),
              sizeVariant: iconSizeVariant,
              classMap: iconClasses,
              fillParent: false,
            },
            {
              'aria-hidden': true,
            }
          )}
        </span>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrButtonIcon);
}

export type BlrButtonIconType = Omit<BlrButtonIcon, keyof LitElementCustom> & BlrButtonIconEventHandlers;
