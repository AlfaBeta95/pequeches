import css from 'styled-jsx/css'
import { colors, fonts } from '../styles/theme.js'
import { addOpacityToColor } from '../util/utils'

const backgroundColor = addOpacityToColor(colors.secondary, 0.7);
const navBg = addOpacityToColor(colors.secondary, 0.2);


export const globalStyles = css.global`
html, body {
  background-color: #ddd;
  background-image:
    radial-gradient(${backgroundColor} 1px, transparent 1px),
    radial-gradient(${backgroundColor} 1px, transparent 1px);
  background-position: 0 0, 25px 25px;
  background-size: 50px 50px;
  font-family: ${fonts.base}
}

ul#sections {
  background: ${navBg}
}
`
