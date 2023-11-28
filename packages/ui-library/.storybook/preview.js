import '../../assets/iconGallery/iconGallery.css';
import '../../assets/fonts/fonts.css';

export default {
  parameters: {
    layout: 'centered',
    actions: {
      argTypesRegex: '^on[A-Z].*',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Dark',
          value: 'hsl(216 9% 10% / 1)',
        },
        {
          name: 'Light',
          value: '#FFFFFF',
        },
      ],
    },
  },
};
