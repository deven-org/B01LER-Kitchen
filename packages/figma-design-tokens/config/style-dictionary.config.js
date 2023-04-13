const kebabCase = require('lodash.kebabcase');
const StyleDictionary = require('style-dictionary');
const { minifyDictionary, fileHeader } = StyleDictionary.formatHelpers;
require('./transforms/index');

const types = [
  'borderRadius',
  'borderWidth',
  'fontFamilies',
  'fontWeights',
  'lineHeights',
  'fontSizes',
  'pargraphSpacing',
  'letterSpacing',
];

const semanticTypes = [
  'CTA',
  'Primary',
  'Secondary',
  'Silent',
  'Destructive',
  'Encourage',
  'BorderRadius',
  'BorderWidth',
  'XS',
  'SM',
  'MD',
  'LG',
  'XL',
  'Background',
  'Fill',
  'Caption',
  'CaptionSlot',
  'Label',
  'LabelSlot',
  'UserInput',
  'Placeholder',
  'SurfaceFill',
  'InputBorderRadius',
  'Input',
  'InputSlot',
  'InputField',
  'LabelAppendix',
  'InputIcon',
];
const componentTypes = ['TextButton', 'IconButton', 'IconDropdown', 'Icon', 'Loader'];

StyleDictionary.registerFormat({
  name: 'custom/format/semanticTokens',
  formatter: function ({ dictionary, file }) {
    const tokenObj = dictionary.tokens;
    return fileHeader({ file }) + `export const semanticTokens = ` + JSON.stringify(minifyDictionary(tokenObj));
  },
});

StyleDictionary.registerFormat({
  name: 'custom/format/componentTokens',
  formatter: function ({ dictionary, file }) {
    const tokenObj = dictionary.tokens;
    return fileHeader({ file }) + `export const componentTokens = ` + JSON.stringify(minifyDictionary(tokenObj));
  },
});

module.exports = {
  source: ['input/tokens/**/*.json'],
  platforms: {
    scss: {
      transforms: [
        'attribute/cti',
        'name/cti/kebab',
        'transform/resolveMath',
        'transform/size/px',
        'transform/font-to-rem',
      ],
      prefix: 'blr',
      buildPath: '../ui-library/src/foundation/_tokens-generated/',
      files: [
        ...types.map((type) => ({
          format: 'css/variables',
          destination: `_${kebabCase(type)}.generated.scss`,
          filter: (token) => token.attributes.category === 'core' && token.attributes.type === type,
        })),
        {
          format: 'css/variables',
          destination: `_color.generated.scss`,
          filter: (token) => {
            const isCore = token.attributes.category === 'core';
            const isColor = token.attributes.type === 'color';

            // We want to filter out some base color values that the final colors are made of.
            // We don't need them as css variables.
            const isLgt = token.attributes.item === 'LGT';
            const isSat = ['HUE', 'SAT'].includes(token.attributes.subitem);

            return isCore && isColor && !isSat && !isLgt;
          },
        },
      ],
    },
    js: {
      transforms: [
        'attribute/cti',
        'name/cti/pascal',
        'transform/resolveMath',
        'transform/size/px',
        'transform/strReplace',
        'transform/font-weight',
      ],
      buildPath: '../ui-library/src/foundation/_tokens-generated/',
      files: [
        {
          format: 'custom/format/semanticTokens',
          destination: '__semantic-tokens.generated.js',
          filter: (token) => {
            const typeToFilter = semanticTypes;
            return typeToFilter.includes(token.attributes.type);
          },
        },
        {
          format: 'custom/format/componentTokens',
          destination: '__component-tokens.generated.js',
          filter: (token) => {
            const typeToFilter = componentTypes;
            return typeToFilter.includes(token.attributes.type);
          },
        },
      ],
    },
  },
};
