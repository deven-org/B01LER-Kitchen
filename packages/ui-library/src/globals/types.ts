import { SizelessIconType } from '@boiler/icons';
import {
  FeedbackSizes,
  Sizes,
  InputTypes,
  FormSizes,
  InputSizes,
  DividerVariations,
  ActionVariants,
  FeedbackVariants,
  CaptionVariants,
  CounterVariants,
  TabVariants,
  TabContentVariants,
  TabAlignmentVariants,
  OverflowVariantsStandard,
  OverflowVariantsFullWidth,
  ButtonGroupSizes,
  LabelVariants,
  Resizes,
  ActionSizes,
  ButtonGroupAlignmentVariants,
  DisplayOptions,
  UnitVariants,
  Units,
} from './constants.js';

export type SizesType = (typeof Sizes)[number];

export type ActionVariantType = (typeof ActionVariants)[number];
export type FeedbackVariantType = (typeof FeedbackVariants)[number];
export type CaptionVariantType = (typeof CaptionVariants)[number];
export type CounterVariantType = (typeof CounterVariants)[number];
export type UnitVariantType = (typeof UnitVariants)[number];
export type UnitType = (typeof Units)[number];
export type ActionSizesType = (typeof ActionSizes)[number];
export type FeedbackSizesType = (typeof FeedbackSizes)[number];
export type FormSizesType = (typeof FormSizes)[number];
export type InputTypes = (typeof InputTypes)[number];
export type ButtonGroupSizesType = (typeof ButtonGroupSizes)[number];
export type ResizeType = (typeof Resizes)[number];

export type InputSizesType = (typeof InputSizes)[number];

export type IconPositionVariant = 'leading' | 'trailing';
export type WarningLimits = 'warningLimitInt' | 'warningLimitPer';
export type DividerVariationTypes = (typeof DividerVariations)[number];
export type ButtonGroupAlignmentType = (typeof ButtonGroupAlignmentVariants)[number];
export type RadioGroupDirection = 'horizontal' | 'vertical';
export type TabVariantType = (typeof TabVariants)[number];
export type TabContentVariantType = (typeof TabContentVariants)[number];
export type TabAlignmentVariantType = (typeof TabAlignmentVariants)[number];
export type OverflowVariantTypeStandard = (typeof OverflowVariantsStandard)[number];
export type OverflowVariantTypeFullWidth = (typeof OverflowVariantsFullWidth)[number];

export type RenderBtnProps = {
  btnId: string;
  btnEventHandler: () => void;
  iconName: SizelessIconType;
};

export type ButtonOption = {
  label: string;
  variant: string;
  size: FormSizesType;
  disabled: boolean;
  buttonId: string;
  trailingIcon: string;
  loading: boolean;
};

export type LabelVariantType = (typeof LabelVariants)[number];
export type DisplayType = (typeof DisplayOptions)[number];
