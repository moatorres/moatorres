import { colors as defaultColors, fonts } from '../primitives'
import { breakpoints, layout } from './shared'

const colors = {
  ...defaultColors,
  primary: '#24292e',
  secondary: '#586069',
  tertiary: '#6a737d',
  placeholder: '#6a737d',
  disabled: '#959da5',
  inverse: '#ffffff',
  link: '#fafafa',
  danger: '#cb2431',
  success: '#22863a',
  warning: '#b08800',
  white: '#ffffff',
  background: '#1f2126', // #151617 #202020 #1d1d1d
  foreground: '#fafafa',
  quoteFg: defaultColors.gray[1],
  quoteBg: defaultColors.gray[9],
}

export const expressiveness = {
  linkStyle: 'none',
  linkHoverStyle: 'none',
  dropdownBoxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.02)',
  scrollerStart: 'rgba(255, 255, 255, 1)',
  scrollerEnd: 'rgba(255, 255, 255, 0)',
  shadowSmall: '0 5px 10px rgba(0, 0, 0, 0.12)',
  shadowMedium: '0 8px 30px rgba(0, 0, 0, 0.12)',
  shadowLarge: '0 30px 60px rgba(0, 0, 0, 0.12)',
  portalOpacity: 0.25,
}

export const themes = {
  type: 'dark',
  fontFamily: fonts.family,
  fontWeight: fonts.weights,
  lineHeight: fonts.lineHeight,
  colors,
  layout,
  breakpoints,
  expressiveness,
}

export default themes
