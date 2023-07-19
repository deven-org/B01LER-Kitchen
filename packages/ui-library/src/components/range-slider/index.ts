import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
import { styleCustom } from './index.css';

@customElement('blr-range-slider')
export class BlrRangeSlider extends LitElement {
  static styles = [styleCustom];

  @property() decrement?: HTMLLinkElement['onclick'];
  @property() increment?: HTMLLinkElement['onclick'];
  @property() value!: number;
  @property() steps!: number;
  @property() stepFactor!: number;
  @property() tickFrequency!: number;
  @property() zeroInclusive!: boolean;

  protected render() {
    const stepsArray = this.zeroInclusive
      ? [...Array(this.steps + 1).keys()]
      : [...Array(this.steps + 1).keys()].slice(1);

    const filteredStepsArray = stepsArray.filter((_, i) => i % this.tickFrequency == 0);

    const calculateBackground = (currentValue: number, totalSteps: number) => {
      return (100 * currentValue) / totalSteps;
    };

    const rangeStyle = css`
      background: linear-gradient(
        to right,
        rgb(20 121 138) 0%,
        rgb(20 121 138) ${calculateBackground(this.value, filteredStepsArray.length)}%,
        rgb(209 239 244) ${calculateBackground(this.value, filteredStepsArray.length)}%,
        rgb(209 239 244) 100%
      );
    `;

    const setValue = (value: number) => {
      if (filteredStepsArray.includes(value)) {
        this.value = value;
      }
    };

    return html` <div class="blr-slider">
      <fieldset class="range__field">
        <output class="tooltip"></output>
        <div class="input-wrapper">
          <button @click="${() => setValue(this.value - this.stepFactor)}">-</button>
          <input
            type="range"
            min="0"
            value=${this.value}
            max="${this.steps}"
            step="${this.stepFactor}"
            class="range"
            style="${rangeStyle}"
          />
          <button @click="${() => setValue(this.value + this.stepFactor)}">+</button>
        </div>
        <div class="tick-wrapper">
          <div class="range__numbers">
            ${map(
              filteredStepsArray,
              (step) => html`
                <div class="range__container">
                  <div class="range__pip"></div>
                  <p class="range__point">${step}</p>
                </div>
              `
            )}
          </div>
        </div>
      </fieldset>
    </div>`;
  }
}

export type BlrRangeSliderType = Omit<BlrRangeSlider, keyof LitElement>;

export const BlrRangeSliderRenderFunction = ({
  decrement,
  increment,
  value,
  steps,
  stepFactor,
  tickFrequency,
  zeroInclusive,
}: BlrRangeSliderType) => {
  return html`<blr-range-slider
    class="example-layout-class"
    .decrement=${decrement}
    .increment=${increment}
    .value=${value}
    .steps=${steps}
    .stepFactor=${stepFactor}
    .tickFrequency=${tickFrequency}
    .zeroInclusive=${zeroInclusive}
  ></blr-range-slider>`;
};
