const colors = {
  white: '#fff',
  pearl: '#fafafa',
  orange: '#ffa200',
  lightGray: '#e8edf0',
  gray: '#86afbb',
  lightBlue: '#0197f6',
  blue: '#446eff',
  red: '#ff2c3d',
  green: '#01d35b'
}


export const white = colors['white'];
export const pearl = colors['pearl'];
export const orange = colors['orange'];
export const lightGray = colors['lightGray'];
export const gray = colors['gray'];
export const lightBlue = colors['lightBlue'];
export const blue = colors['blue'];
export const red = colors['red'];
export const green = colors['green'];

export const getRandomColor = () => {
  const keys = Object.keys(colors);
  return colors[keys[Math.floor(Math.random()*keys.length)]];
}