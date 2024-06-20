import { capturingRegex } from './capture-size-regex.js';

const removeIconSizes = (icons: string[]) => {
  return icons.map((icon: string) => {
    const found = icon.match(capturingRegex);
    if (found && found.index) {
      return icon.substring(0, found.index);
    } else {
      return icons;
    }
  });
};

export const getIconName = (icons: string[]) => {
  return [...new Set(removeIconSizes(icons))];
};
