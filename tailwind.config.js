/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
const { createThemes } = require('tw-colors');
const { designSystem } = require('./src/configs');

const { dark: darkCustom, light: lightCustom } = designSystem.designSystemTW;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [
    createThemes(({ dark }) => ({
      light: dark({ ...lightCustom.colors }),
      dark: dark({ ...darkCustom.colors }),
    })),
  ],
};
