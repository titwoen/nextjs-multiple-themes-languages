/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
const { createThemes } = require('tw-colors');
const { designSystem } = require('./src/configs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        Quicksand: "'Quicksand', sans-serif",
      },
    },
  },
  plugins: [
    createThemes(({ dark, light }) => ({
      light: dark(designSystem.designSystemTW.light),
      dark: light(designSystem.designSystemTW.dark),
    })),
  ],
};
