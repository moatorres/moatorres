const normal =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"'

const sans =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif'

const mono =
  'Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace'

const code =
  'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace'

const weights = {
  light: 300,
  normal: 400,
  semibold: 500,
  bold: 600,
  black: 800,
}
const lineHeight = {
  small: 1,
  condensed: 1.25,
  default: 1.5,
}

const family = { normal, sans, mono, code }

export default {
  family,
  weights,
  lineHeight,
}
