import { BlrTextInputRenderFunction, BlrTextInputType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { getRandomString } from '../../utils/get-random.string';

const sampleParams: BlrTextInputType = {
  textInputId: '#1',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  type: 'text',
  value: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  maxLength: 140,
  errorMessage: 'OMG it`s an error',
  placeholder: 'Type your message here ..',
  hintText: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  hintIcon: 'blrInfoLg',
  showHint: true,
  hasLabel: true,
  showInputIcon: true,
  inputIcon: 'blr360Lg',
};

describe('blr-text-input', () => {
  it('is having a input containing the right className', async () => {
    const element = await fixture(BlrTextInputRenderFunction(sampleParams));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const className = input?.className;

    expect(className).to.contain('blr-form-element');
  });

  it('is is showing random placeholder', async () => {
    const randomString = getRandomString();

    const element = await fixture(
      BlrTextInputRenderFunction({
        ...sampleParams,
        placeholder: randomString,
      })
    );

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const placeholder = input?.getAttribute('placeholder');

    expect(placeholder).to.be.equal(randomString);
  });
});
