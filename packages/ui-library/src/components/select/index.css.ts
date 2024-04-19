import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

import { SemanticThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { semanticTokens } from "../../foundation/_tokens-generated/semanticTokensType.generated";
import { ThemeType } from "../../foundation/_tokens-generated/index.themes";

const directionIndicatorIconClassName = "icon-direction-indicator";

export const staticStyles = typeSafeNestedCss/*css*/ `
  .${directionIndicatorIconClassName} {
    pointer-events: none;
    position: relative;
  }

  .blr-select-option {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .blr-select > .label-wrapper {
    display: flex;
  }

  slot {
    display: none;
  }

  .blr-select-inner-container {
    flex-grow: 1;
    flex-shrink: 1;

    .blr-form-select {
      all: initial;
      box-sizing: border-box;
      width: 100%;
      border: none;
      outline: none;

      &.focus {
        border: none;
        outline: none;
      }

      &.error-select {
        border: none;
        outline: none;

        &:hover {
          border: none;
          outline: none;
        }

        &:active {
          border: none;
          outline: none;
        }

        &.focus {
          border: none;
          outline: none;
        }
      }
    }
  }

  .blr-select-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    .blr-form-select {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    &.focus {
      border-color: transparent;
    }

    &.disabled {
      border-color: transparent;
      cursor: not-allowed;

      .blr-form-select {
        border: none;
        outline: none;
        background: transparent;
        cursor: not-allowed;
      }
    }

    &[readonly] {
      border-color: transparent;
    }

    &:active {
      border-color: transparent;
    }

    &.error-input {
      &.focus {
        border-color: transparent;
      }

      .blr-form-select {
        background: transparent;
      }
    }
  }

  ${SemanticThemeIterator((theme, sem, typeSafeCss) => {
    const { inputfield, inputslot, labelslot } = sem.forms;

    return typeSafeCss/*css*/ `
      ${getDirectionIndicatorIconStyles({ theme, semanticTokens: sem }).cssText}

      .blr-select.${theme} {
        &.sm {
          & > .label-wrapper {
            padding: ${labelslot.padding.sm};
          }
        }
        &.md {
          & > .label-wrapper {
            padding: ${labelslot.padding.md};
          }
        }
        &.lg {
          & > .label-wrapper {
            padding: ${labelslot.padding.lg};
          }
        }
      }

      .blr-select-inner-container.${theme} {
        .blr-form-select {
          border-radius: ${inputfield.container.borderradius};
          color: ${inputfield.userinput.textcolor.default.rest};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.rest};
          }

          &:hover {
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.hover};
            }
          }

          &:active {
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.pressed};
            }
          }

          &[readonly] {
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.readonly};
            }
          }

          &.disabled {
            color: ${inputfield.userinput.textcolor.default.disabled};
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.disabled};
            }
          }

          &.focus {
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.focus};
            }
          }

          &.error-select {
            &::placeholder {
              color: ${inputfield.placeholder.textcolor.error.rest};
            }

            &:hover {
              &::placeholder {
                color: ${inputfield.placeholder.textcolor.error.hover};
              }
            }

            &:active {
              &::placeholder {
                color: ${inputfield.placeholder.textcolor.error.pressed};
              }
            }

            &.focus {
              &::placeholder {
                color: ${inputfield.placeholder.textcolor.error.focus};
              }
            }
          }

          &.sm {
            font-weight: ${inputfield.userinput.typography.sm.fontWeight};
            font-size: ${inputfield.userinput.typography.sm.fontSize};
            font-family: ${inputfield.userinput.typography.sm.fontFamily}, sans-serif;
            line-height: ${inputfield.userinput.typography.sm.lineHeight};
          }

          &.md {
            font-weight: ${inputfield.userinput.typography.md.fontWeight};
            font-size: ${inputfield.userinput.typography.md.fontSize};
            font-family: ${inputfield.userinput.typography.md.fontFamily}, sans-serif;
            line-height: ${inputfield.userinput.typography.md.lineHeight};
          }

          &.lg {
            font-weight: ${inputfield.userinput.typography.lg.fontWeight};
            font-size: ${inputfield.userinput.typography.lg.fontSize};
            font-family: ${inputfield.userinput.typography.lg.fontFamily}, sans-serif;
            line-height: ${inputfield.userinput.typography.lg.lineHeight};
          }
        }
      }

      .blr-select-wrapper.${theme} {
        border: ${inputfield.container.border.default.rest.width} ${inputfield.container.border.default.rest.style}
          ${inputfield.container.border.default.rest.color};
        border-radius: ${inputfield.container.borderradius};
        background-color: ${inputfield.container.bgcolor.default.rest};

        &.sm {
          padding: ${inputfield.container.padding.sm};
          margin: ${inputslot.margin.sm};
        }

        &.md {
          padding: ${inputfield.container.padding.md};
          margin: ${inputslot.margin.md};
        }

        &.lg {
          padding: ${inputfield.container.padding.lg};
          margin: ${inputslot.margin.lg};
        }

        &:hover {
          border-width: ${inputfield.container.border.default.hover.width};
          border-style: ${inputfield.container.border.default.hover.style};
          border-color: ${inputfield.container.border.default.hover.color};
          color: ${inputfield.userinput.textcolor.default.hover};
          background-color: ${inputfield.container.bgcolor.default.hover};

          &.error-select:not(.disabled) {
            color: ${inputfield.container.border.error.rest.color};
          }
        }

        &.focus {
          border-width: ${inputfield.container.border.default.rest.width};
          border-style: ${inputfield.container.border.default.rest.style};
          outline: ${inputfield.container.border.default.focus.width} ${inputfield.container.border.default.focus.style}
            ${inputfield.container.border.default.focus.color};
          color: ${inputfield.userinput.textcolor.default.focus};
          background-color: ${inputfield.container.bgcolor.default.focus};
        }

        &.disabled {
          border-width: ${inputfield.container.border.default.readonly.width};
          border-style: ${inputfield.container.border.default.disabled.style};
          outline: ${inputfield.container.border.default.disabled.width} ${inputfield.container.border.default.disabled.style}
            ${inputfield.container.border.default.disabled.color};
          color: ${inputfield.userinput.textcolor.default.disabled};
          background-color: ${inputfield.container.bgcolor.default.disabled};
        }

        &[readonly] {
          border-width: ${inputfield.container.border.default.readonly.width};
          border-style: ${inputfield.container.border.default.readonly.style};
          outline: ${inputfield.container.border.default.hover.width} ${inputfield.container.border.default.readonly.style}
            ${inputfield.container.border.default.readonly.color};
          background-color: ${inputfield.container.bgcolor.default.readonly};
        }

        &:active {
          border-width: ${inputfield.container.border.default.pressed.width};
          border-style: ${inputfield.container.border.default.pressed.style};
          outline: ${inputfield.container.border.default.pressed.width} ${inputfield.container.border.default.pressed.style}
            ${inputfield.container.border.default.pressed.color};
          color: ${inputfield.userinput.textcolor.default.pressed};
          background-color: ${inputfield.container.bgcolor.default.pressed};
        }

        &.error-input {
          border-width: ${inputfield.container.border.error.rest.width};
          border-style: ${inputfield.container.border.error.rest.style};
          border-color: ${inputfield.container.border.error.rest.color};
          background-color: ${inputfield.container.bgcolor.error.rest};

          &.focus {
            border-width: ${inputfield.container.border.error.rest.width};
            border-style: ${inputfield.container.border.error.rest.style};
            outline: ${inputfield.container.border.error.focus.width} ${inputfield.container.border.error.focus.style}
              ${inputfield.container.border.error.focus.color};
            color: ${inputfield.userinput.textcolor.error.focus};
            background-color: ${inputfield.container.bgcolor.error.focus};
          }

          &:hover {
            border-width: ${inputfield.container.border.error.hover.width};
            border-style: ${inputfield.container.border.error.hover.style};
            color: ${inputfield.userinput.textcolor.error.hover};
            background-color: ${inputfield.container.bgcolor.error.hover};
          }

          &:active {
            border-width: ${inputfield.container.border.error.pressed.width};
            border-style: ${inputfield.container.border.error.pressed.style};
            border-color: ${inputfield.container.border.error.pressed.color};
            outline: ${inputfield.container.border.error.pressed.width} ${inputfield.container.border.error.pressed.style}
              ${inputfield.container.border.error.pressed.color};
            color: ${inputfield.userinput.textcolor.error.pressed};
            background-color: ${inputfield.container.bgcolor.error.pressed};
          }

          .blr-form-select {
            color: ${inputfield.userinput.textcolor.error.rest};
          }
        }
      }
    `;
  })}
`;

function getDirectionIndicatorIconStyles({ theme, semanticTokens }: { theme: ThemeType; semanticTokens: semanticTokens["sem"] }) {
  const { inputfield } = semanticTokens.forms;

  return typeSafeNestedCss`
    .${directionIndicatorIconClassName}.${theme} {
      color: ${inputfield.icon.iconcolor.default.rest};

      &.sm {
        height: ${inputfield.icon.iconsize.sm};
        width: ${inputfield.icon.iconsize.sm};
      }
      &.md {
        height: ${inputfield.icon.iconsize.md};
        width: ${inputfield.icon.iconsize.md};
      }
      &.lg {
        height: ${inputfield.icon.iconsize.lg};
        width: ${inputfield.icon.iconsize.lg};
      }
    }

    .blr-select-wrapper.${theme} {
      &:hover .${directionIndicatorIconClassName} {
        color: ${inputfield.icon.iconcolor.default.hover};
      }

      &:focus-within .${directionIndicatorIconClassName} {
        color: ${inputfield.icon.iconcolor.default.focus};
      }

      &:active .${directionIndicatorIconClassName} {
        color: ${inputfield.icon.iconcolor.default.pressed};
      }

      &.disabled {
        .${directionIndicatorIconClassName} {
          color: ${inputfield.icon.iconcolor.default.disabled};
        }
      }
  
      &.error, .error.disabled {
        .${directionIndicatorIconClassName} {
          color: ${inputfield.icon.iconcolor.error.rest};
        }

        &:hover .${directionIndicatorIconClassName} {
          color: ${inputfield.icon.iconcolor.error.hover};
        }
  
        &:focus-within .${directionIndicatorIconClassName} {
          color: ${inputfield.icon.iconcolor.error.focus};
        }
  
        &:active .${directionIndicatorIconClassName} {
          color: ${inputfield.icon.iconcolor.error.pressed};
        }
      }
    }
  `;
}
