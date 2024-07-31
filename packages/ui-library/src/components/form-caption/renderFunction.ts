import { BlrFormCaptionType } from './index.js';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';

export const TAG_NAME = 'blr-form-caption';

export const BlrFormCaptionRenderFunction = (params: BlrFormCaptionType) =>
  genericBlrComponentRenderer<BlrFormCaptionType>(TAG_NAME, { ...params });
