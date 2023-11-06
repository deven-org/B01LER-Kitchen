import { css } from "nested-css-to-flat/lit-css";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: iconLight, tokenizedDark: iconDark } = renderThemedCssStrings((componentTokens) => {
  const { UI } = componentTokens;

  return css`
    .blr-icon.xxs {
      width: ${UI.Icon.XXS};
      height: ${UI.Icon.XXS};
    }

    .blr-icon.xs {
      width: ${UI.Icon.XS};
      height: ${UI.Icon.XS};
    }

    .blr-icon.sm {
      width: ${UI.Icon.SM};
      height: ${UI.Icon.SM};
    }

    .blr-icon.md {
      width: ${UI.Icon.MD};
      height: ${UI.Icon.MD};
    }

    .blr-icon.lg {
      width: ${UI.Icon.LG};
      height: ${UI.Icon.LG};
    }

    .blr-icon.xl {
      width: ${UI.Icon.XL};
      height: ${UI.Icon.XL};
    }
  `;
});

export const { tokenizedLight: buttonGroupLight, tokenizedDark: buttonGroupDark } = renderThemedCssStrings((componentTokens) => {
  const { UI } = componentTokens;

  return css`
    .blr-button-group.xs {
      gap: ${UI.ButtonGroup.XS.ItemSpacing};
    }

    .blr-button-group.sm {
      gap: ${UI.ButtonGroup.SM.ItemSpacing};
    }

    .blr-button-group.md {
      gap: ${UI.ButtonGroup.MD.ItemSpacing};
    }

    .blr-button-group.lg {
      gap: ${UI.ButtonGroup.LG.ItemSpacing};
    }

    .blr-button-group.xl {
      gap: ${UI.ButtonGroup.XL.ItemSpacing};
    }
  `;
});
