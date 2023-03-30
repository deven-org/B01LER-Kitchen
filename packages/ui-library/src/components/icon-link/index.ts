import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { action } from '../../foundation/semantic-tokens/action.css';
import { iconButton } from '../../foundation/component-tokens/action.css';
import { ActionVariants, SizesType } from '../../globals/types';

@customElement('blr-icon-link')
export class BlrIconLink extends LitElement {
  static styles = [styleCustom, action, iconButton];

  @property() arialabel!: string;
  @property() iconName!: IconType;
  @property() href!: string;
  @property() target?: string;
  @property() onClick?: HTMLLinkElement['onclick'];
  @property() onBlur?: HTMLLinkElement['onblur'];
  @property() linkId?: string;
  @property() variant: ActionVariants = 'primary';
  @property() size?: SizesType = 'md';

  render() {
    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
    });

    return html`<a
      aria-label="${this.ariaLabel}"
      class="blr-semantic-action blr-icon-link blr-icon-button ${classes}"
      href="${this.href}"
      target="${this.target}"
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      id=${this.linkId}
    >
      <blr-icon name="${this.iconName}" aria-hidden></blr-icon>
    </a>`;
  }
}
