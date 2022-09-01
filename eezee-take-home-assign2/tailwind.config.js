const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    colors: {
      divider: '#E4E5E7',
      white: '#FFFFFF',
      background: '#EFEFF0',
      foreground: '#F5F5F7',
      border: '#D7D8DB',
      'grey-base': '#242528',
      'grey-primary': '#55585D',
      'grey-secondary': '#868A92',
      'grey-tertiary': 'BCBEC2',
      'eezee-yellow': '#FFC822',
      'eezee-yellow-light': '#FFE69C',
      'eezee-yellow-dark': '#6A5001',
      'eezee-blue': '#2A64DB',
      'eezee-blue-dark': '#1E4DAF',
      'eezee-blue-light': '#DBE5FA',
      'tab-bg': '#EEF2FC',
      'tab-border': '#2A64DB',
      'tab-text': '#595959',
      indigo: colors.indigo
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif']
      }
    }
  },
  plugins: [],
  prefix: 'tw-'
};
