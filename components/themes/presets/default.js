import { colors as defaultColors, fonts } from '../primitives'
import { breakpoints, layout } from './shared'

const colors = {
  ...defaultColors,
  background: '#fafafa',
  foreground: '#151617',
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
  type: 'light',
  fontFamily: fonts.family,
  fontWeight: fonts.weights,
  lineHeight: fonts.lineHeight,
  colors,
  layout,
  breakpoints,
  expressiveness,
}

export default themes
