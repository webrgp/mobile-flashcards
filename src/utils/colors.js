const colors = {
  orange: '#ffa200',
  gray: '#86afbb',
  lightBlue: '#0197f6',
  blue: '#446eff',
  red: '#ff2c3d',
  green: '#01d35b'
}


export const white = '#fff';
export const pearl = '#fafafa';
export const charcoal = '#36454F';
export const orange = colors['orange'];
export const lightGray = '#e8edf0';
export const gray = colors['gray'];
export const lightBlue = colors['lightBlue'];
export const blue = colors['blue'];
export const red = colors['red'];
export const green = colors['green'];

export const getRandomColor = () => {
  const keys = Object.keys(colors);
  return colors[keys[Math.floor(Math.random()*keys.length)]];
}