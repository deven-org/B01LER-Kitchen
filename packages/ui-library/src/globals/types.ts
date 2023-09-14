import { IconType } from '@boiler/icons';
import {
  FeedbackSizes,
  Sizes,
  InputTypes,
  FormSizes,
  InputSizes,
  DividerVariations,
  ActionVariants,
  FeedbackVariants,
  HintVariants,
  CounterVariants,
  TabVariants,
  TabContentVariants,
  TabAlignmentVariants,
  OverflowVariantsStandard,
  OverflowVariantsFullWidth,
  ButtonGroupSizes,
} from './constants';

export type SizesType = (typeof Sizes)[number];

export type ActionVariantType = (typeof ActionVariants)[number];
export type FeedbackVariantType = (typeof FeedbackVariants)[number];
export type HintVariantType = (typeof HintVariants)[number];
export type CounterVariantType = (typeof CounterVariants)[number];

export type FeedbackSizesType = (typeof FeedbackSizes)[number];
export type FormSizesType = (typeof FormSizes)[number];
export type InputTypes = (typeof InputTypes)[number];
export type ButtonGroupSizesType = (typeof ButtonGroupSizes)[number];

export type InputSizesType = (typeof InputSizes)[number];
export type RadioOption = {
  label: string;
  value: string;
  hintMessage?: string;
  errorMessage?: string;
  checked?: boolean;
};
export type IconPositionVariant = 'leading' | 'trailing';
export type WarningLimits = 'warningLimitInt' | 'warningLimitPer';
export type DividerVariationTypes = (typeof DividerVariations)[number];
export type AlignmentType = (typeof TabAlignmentVariants)[number];
export type TabType = {
  label: string;
  icon: IconType;
  href: string;
  disabled?: boolean;
};
export type TabVariantType = (typeof TabVariants)[number];
export type TabContentVariantType = (typeof TabContentVariants)[number];
export type TabAlignmentVariantType = (typeof TabAlignmentVariants)[number];
export type OverflowVariantTypeStandard = (typeof OverflowVariantsStandard)[number];
export type OverflowVariantTypeFullWidth = (typeof OverflowVariantsFullWidth)[number];

export type RenderBtnProps = {
  btnId: string;
  btnEventHandler: () => void;
  iconName: IconType;
};

export type ButtonOption = {
  label: string;
  variant: string;
  size: FormSizesType;
  loadingStatus: string;
  disabled: boolean;
  buttonId: string;
  trailingIcon: string;
  loading: boolean;
};
