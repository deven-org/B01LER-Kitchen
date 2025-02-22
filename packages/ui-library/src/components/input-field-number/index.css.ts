import { SemanticThemeIterator, ComponentThemeIterator } from "../../foundation/_tokens-generated/iterator.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticBaseStyles = css`
  .noPointerEvents {
    pointer-events: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"]::-moz-number-spin-box {
    -moz-appearance: none;
  }

  .input-wrapper {
    display: flex;
    overflow: hidden;
    box-sizing: border-box;

    .input-unit-container {
      display: flex;
      align-items: center;
    }

    .input-unit-container .unit.prepend {
      grid-area: first;
      padding-right: 0;
      order: -2;
    }

    .input-unit-container input.prepend {
      grid-area: second;
      padding-left: 0;
    }

    .input-unit-container .unit:not(.prepend) {
      grid-area: second;
      padding-left: 0;
    }

    .input-unit-container input:not(.prepend) {
      grid-area: first;
      padding-right: 0;
    }

    .input-unit-container.split {
      flex: 1;
      display: inline-grid;
      grid-template-columns: 1fr auto auto 1fr;
      grid-template-areas: "left-gap first second right-gap";
    }

    .input-unit-container.split .input-container > input {
      text-align: center;
    }

    .input-unit-container.split input {
      text-align: left;
    }
  }

  .split > button:first-of-type {
    order: -2;
  }

  .split > button:last-of-type {
    _margin-left: auto;
  }

  &:not(.split) {
    .input-unit-container {
      width: 100%;
    }

    .input-unit-container input:not(.prepend) {
      width: 100%;
    }
  }
`;

export const staticSemanticStyles = css`
  ${SemanticThemeIterator((theme, sem, css) => {
    const { inputfield, labelslot } = sem.forms;

    return css`
      .blr-input-field-number.${theme} {
        &.sm {
          & > .label-wrapper {
            display: flex;
            padding: ${labelslot.padding.sm};
          }
        }

        &.md {
          & > .label-wrapper {
            display: flex;
            padding: ${labelslot.padding.md};
          }
        }

        &.lg {
          & > .label-wrapper {
            display: flex;
            padding: ${labelslot.padding.lg};
          }
        }
      }

      .input-wrapper.${theme} {
        box-sizing: border-box;
        background-color: ${inputfield.container.bgcolor.default.rest};
        width: 100%;
        outline-width: ${inputfield.container.border.default.rest.width};
        outline-offset: calc(${inputfield.container.border.default.rest.width} * -1);
        outline-style: ${inputfield.container.border.default.rest.style};
        outline-color: ${inputfield.container.border.default.rest.color};
        border-radius: ${inputfield.container.borderradius};

        &:focus-within.${theme} {
          outline-offset: calc(${inputfield.container.border.default.focus.width} * -1);
          outline-width: ${inputfield.container.border.default.focus.width};
          outline-style: ${inputfield.container.border.default.focus.style};
          outline-color: ${inputfield.container.border.default.focus.color};
          background-color: ${inputfield.container.bgcolor.default.focus};

          & > input {
            color: ${inputfield.userinput.textcolor.default.focus};

            &::placeholder {
              color: ${inputfield.placeholder.textcolor.default.focus};
            }
          }
        }

        &.disabled {
          .input-unit-container .unit {
            color: ${inputfield.prefixsuffix.textcolor.default.disabled};
          }
        }

        &.error-input {
          outline: ${inputfield.container.border.error.rest.width} ${inputfield.container.border.error.rest.style}
            ${inputfield.container.border.error.rest.color};
          background-color: ${inputfield.container.bgcolor.error.rest};

          .input-unit-container .unit {
            color: ${inputfield.prefixsuffix.textcolor.error.rest};
          }

          &:focus-within {
            outline: ${inputfield.container.border.error.focus.width} ${inputfield.container.border.error.focus.style}
              ${inputfield.container.border.error.focus.color};
            background-color: ${inputfield.container.bgcolor.error.focus};
          }
        }
      }

      input.${theme} {
        outline: none;
        background-color: ${inputfield.container.bgcolor.default.rest};
        color: ${inputfield.userinput.textcolor.default.rest};
        border: none;

        &::placeholder {
          color: ${inputfield.placeholder.textcolor.default.rest};
        }

        &.readonly {
          color: ${inputfield.userinput.textcolor.default.readonly};
          background-color: ${inputfield.container.bgcolor.default.readonly};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.readonly};
          }

          &:focus-within.${theme} {
            outline-offset: calc(${inputfield.container.border.default.focus.width} * -1);
            outline-width: ${inputfield.container.border.default.focus.width};
            outline-style: ${inputfield.container.border.default.focus.style};
            outline-color: ${inputfield.container.border.default.focus.color};
            background-color: ${inputfield.container.bgcolor.default.focus};

            & > input {
              color: ${inputfield.userinput.textcolor.default.focus};

              &::placeholder {
                color: ${inputfield.placeholder.textcolor.default.focus};
              }
            }
          }
        }

        &:disabled {
          color: ${inputfield.userinput.textcolor.default.disabled};
          background-color: ${inputfield.container.bgcolor.default.disabled};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.default.disabled};
          }
        }
      }

      .input-unit-container.${theme} {
        .unit {
          color: ${inputfield.prefixsuffix.textcolor.default.rest};
        }
      }

      .unit.${theme}, input.${theme} {
        &.sm {
          font-weight: ${inputfield.userinput.typography.sm.fontWeight};
          font-size: ${inputfield.userinput.typography.sm.fontSize};
          font-family: ${inputfield.userinput.typography.sm.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.sm.lineHeight};
          padding: ${inputfield.container.padding.sm};
        }

        &.md {
          font-weight: ${inputfield.userinput.typography.md.fontWeight};
          font-size: ${inputfield.userinput.typography.md.fontSize};
          font-family: ${inputfield.userinput.typography.md.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.md.lineHeight};
          padding: ${inputfield.container.padding.md};
        }

        &.lg {
          font-weight: ${inputfield.userinput.typography.lg.fontWeight};
          font-size: ${inputfield.userinput.typography.lg.fontSize};
          font-family: ${inputfield.userinput.typography.lg.fontFamily}, sans-serif;
          line-height: ${inputfield.userinput.typography.lg.lineHeight};
          padding: ${inputfield.container.padding.lg};
        }
      }

      &.disabled.${theme} {
        outline: ${inputfield.container.border.default.disabled.width} ${inputfield.container.border.default.disabled.style}
          ${inputfield.container.border.default.disabled.color};
        background-color: ${inputfield.container.bgcolor.default.disabled};
        cursor: not-allowed;
      }

      &.error-input.${theme} {
        outline: none;
        color: ${inputfield.userinput.textcolor.error.rest};
        background-color: ${inputfield.container.bgcolor.error.rest};

        &::placeholder {
          color: ${inputfield.placeholder.textcolor.error.rest};
        }

        &:focus-within {
          outline: none;
          color: ${inputfield.userinput.textcolor.error.focus};
          background-color: ${inputfield.container.bgcolor.error.focus};

          &::placeholder {
            color: ${inputfield.placeholder.textcolor.error.focus};
          }
        }
      }
    `;
  })}
`;

export const staticComponentStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { stepperbutton, steppercombo, inputfieldnumber } = cmp;

    return css`
      .input-unit-container.${theme} {
        &.sm {
          gap: ${inputfieldnumber.inputfield.textwrapper.itemspacing.sm};
        }

        &.md {
          gap: ${inputfieldnumber.inputfield.textwrapper.itemspacing.md};
        }

        &.lg {
          gap: ${inputfieldnumber.inputfield.textwrapper.itemspacing.lg};
        }
      }

      .split.${theme} {
        &.sm {
          & > .custom-stepper-button {
            width: ${stepperbutton.container.width.sm};
          }
        }

        &.md {
          & > .custom-stepper-button {
            width: ${stepperbutton.container.width.md};
          }
        }

        &.lg {
          & > .custom-stepper-button {
            width: ${stepperbutton.container.width.lg};
          }
        }
      }

      .stepper-combo.${theme} {
        &.horizontal {
          display: grid;
          grid-template-columns: 1fr 0 1fr;
          justify-content: center;

          &.sm {
            width: ${steppercombo.container.width.horizontal.sm};

            & > blr-divider {
              padding: ${steppercombo.dividerwrapper.padding.horizontallayout.sm};
            }
          }

          &.md {
            width: ${steppercombo.container.width.horizontal.md};

            & > blr-divider {
              padding: ${steppercombo.dividerwrapper.padding.horizontallayout.md};
            }
          }

          &.lg {
            width: ${steppercombo.container.width.horizontal.lg};

            & > blr-divider {
              padding: ${steppercombo.dividerwrapper.padding.horizontallayout.lg};
            }
          }
        }

        &.vertical {
          display: grid;
          grid-template-rows: 1fr 0 1fr;
          justify-content: center;

          &.sm {
            width: ${steppercombo.container.width.vertical.sm};

            & > blr-divider {
              padding: ${steppercombo.dividerwrapper.padding.verticallayout.sm};
            }
          }

          &.md {
            width: ${steppercombo.container.width.vertical.md};

            & > blr-divider {
              padding: ${steppercombo.dividerwrapper.padding.verticallayout.md};
            }
          }

          &.lg {
            width: ${steppercombo.container.width.vertical.lg};

            & > blr-divider {
              padding: ${steppercombo.dividerwrapper.padding.verticallayout.lg};
            }
          }
        }
      }

      .custom-stepper-button.${theme} {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        padding: 0;
        background-color: ${stepperbutton.container.bgcolor.rest};
        color: ${stepperbutton.icon.iconcolor.rest};

        &:hover:not(:disabled) {
          background-color: ${stepperbutton.container.bgcolor.hover};
          color: ${stepperbutton.icon.iconcolor.hover};
        }

        &:disabled {
          background-color: ${stepperbutton.container.bgcolor.disabled};
          color: ${stepperbutton.icon.iconcolor.disabled};
          cursor: not-allowed;
        }

        &.horizontal {
          &.sm {
            width: ${stepperbutton.container.width.sm};
          }

          &.md {
            width: ${stepperbutton.container.width.md};
          }

          &.lg {
            width: ${stepperbutton.container.width.lg};
          }
        }

        &.vertical {
          width: inherit;
          align-items: flex-start;

          & > blr-icon {
            height: ${stepperbutton.icon.iconsize.sm};
          }

          &.md > blr-icon {
            height: ${stepperbutton.icon.iconsize.md};
          }

          &.lg > blr-icon {
            height: ${stepperbutton.icon.iconsize.lg};
          }
        }
      }
    `;
  })}
`;
