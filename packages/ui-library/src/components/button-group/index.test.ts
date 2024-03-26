import '@boiler/ui-library/dist/';
import { BlrButtonGroupRenderFunction } from './renderFunction';
import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import type { BlrButtonGroupType } from '.';
import { BlrTextButtonRenderFunction } from '../text-button/renderFunction';

const sampleParams: BlrButtonGroupType = {
  sizeVariant: 'md',
  alignment: 'left',
};

const testContent = BlrTextButtonRenderFunction({
  label: 'Jaok',
  theme: 'Light',
  loading: false,
  variant: 'primary',
  disabled: false,
});

describe('blr-button-group', () => {
  it('is rendering text button inside slot', async () => {
    const element = await fixture(BlrButtonGroupRenderFunction(sampleParams, testContent));
    const checkbox = querySelectorDeep('blr-text-button', element.getRootNode() as HTMLElement);

    expect(checkbox).to.exist;
  });
});
