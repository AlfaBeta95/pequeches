// Calcula la opacidad(entre 0 y 1) para colores en formato Hex
export const addOpacityToColor = (color, opacity) => {
    return `${color}${Math.round(opacity*255).toString(16)}`
}