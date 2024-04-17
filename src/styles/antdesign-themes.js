import { TinyColor } from '@ctrl/tinycolor';

const btnColors = ['#e34bf0', '#7b93e8', '#aae39c', '#fee508'];
const getHoverColors = (colors) =>
  colors.map((color) => new TinyColor(color).lighten(5).toString());
const getActiveColors = (colors) =>
  colors.map((color) => new TinyColor(color).darken(5).toString());

export const rainbowBtnTheme = {
  components: {
    Button: {
      colorPrimary: `linear-gradient(135deg,  ${btnColors.join(', ')})`,
      colorPrimaryHover: `linear-gradient(135deg, ${getHoverColors(
        btnColors
      ).join(', ')})`,
      colorPrimaryActive: `linear-gradient(135deg, ${getActiveColors(
        btnColors
      ).join(', ')})`,
      lineWidth: 0,
    },
  },
};

export const simpleBtnTheme = {
  components: {
    Button: {
      defaultColor: '#ffffff',
      defaultBg: '#212121',
      defaultBorderColor: '#212121',
      defaultHoverBg: '#212121',
      defaultHoverBorderColor: '#212121',
      defaultHoverColor: '#e34bf0',
      defaultActiveBg: '#212121',
      defaultActiveBorderColor: '#212121',
      defaultActiveColor: '#e34bf0',
    },
  },
};

export const modalTheme = {
  contentBg: '#212121',
  headerBg: '#212121',
  titleFontSize: '40px',
  titleLineHeight: '1.2',
  colorIcon: '#ffffff',
  titleColor: '#ffffff',
  colorIconHover: '#e34bf0',
};

export const inputTheme = {
  activeBorderColor: '#e34bf0',
  hoverBorderColor: '#e34bf0',
  colorBgContainerDisabled: '#ffffff',
};

export const selectTheme = {
  colorPrimaryHover: '#e34bf0',
  colorPrimary: '#e34bf0',
  colorBgContainerDisabled: '#ffffff',
};

export const datePickerTheme = {
  colorPrimaryHover: '#e34bf0',
  colorPrimary: '#e34bf0',
  colorBgContainerDisabled: '#ffffff',
};
