import { v4 as mId } from 'uuid';

const designSystemDev = {
  dark: {
    colors: [
      {
        id: mId(),
        key: 'titwo',
        info: [
          { key: '0', hex: '#FFFFFF' },
          { key: '1', hex: '#0000001A' },
          { key: '2', hex: '#FFFFFF0A' },
          { key: '3', hex: '#FFFFFF33' },
          { key: '4', hex: '#00000024' },
          { key: '5', hex: '#0000008A' },
          { key: '6', hex: '#C1D6FF' },
          { key: '7', hex: '#FFFFFF24' },
        ],
      },
    ],
  },
  light: {
    colors: [
      {
        id: mId(),
        key: 'base',
        info: [
          { key: 'white', hex: '#FFFFFF' },
          { key: 'black', hex: '#000000' },
        ],
      },
    ],
  },
};

const designSystemTW = () => {
  return {
    dark: {
      colors: designSystemDev.dark.colors.reduce(
        (a1, v1) => ({
          ...a1,
          [v1.key]: v1.info.reduce(
            (a2, v2) => ({ ...a2, [v2.key]: v2.hex }),
            {}
          ),
        }),
        {}
      ),
    },
    light: {
      colors: designSystemDev.light.colors.reduce(
        (a1, v1) => ({
          ...a1,
          [v1.key]: v1.info.reduce(
            (a2, v2) => ({ ...a2, [v2.key]: v2.hex }),
            {}
          ),
        }),
        {}
      ),
    },
  };
};

const designSystem = { designSystemDev, designSystemTW: designSystemTW() };

export default designSystem;
