import '@boiler/ui-library';

import { BlrTooltipRenderFunction } from './renderFunction.js';
import type { BlrTooltipType } from './index.js';

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTooltipType = {
  message: 'Tooltip text comes here Tooltip text comes here',
  placement: 'right',
};

const testContent = html`<div
  className="blue-box"
  style="height: 200px; width: 200px; background-color: lightblue"
></div>`;

describe('blr-tooltip', () => {
  it('is having a tooltip element', async () => {
    const element = await fixture(BlrTooltipRenderFunction(sampleParams, testContent));

    const tooltip = querySelectorDeep('blr-tooltip', element.getRootNode() as HTMLElement);

    expect(tooltip).to.exist;
  });

  it('is rendering the tooltip child element', async () => {
    const element = await fixture(BlrTooltipRenderFunction(sampleParams, testContent));
    expect(element.childNodes[1]).to.exist;
  });
});
