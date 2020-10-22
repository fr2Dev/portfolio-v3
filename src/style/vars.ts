import { css } from 'styled-components';
import theme from './theme';

const { colors, base, radius } = theme;
const { main, mainLighter, secondary, tertiary, white, grey } = colors;

const vars = css`
  --clr-main: ${main};
  --clr-main-lighter: ${mainLighter};
  --clr-secondary: ${secondary};
  --clr-tertiary: ${tertiary};
  --clr-white: ${white};
  --clr-grey: ${grey};
  --radius: ${radius};
  --base: ${base};
  --transition: 0.15s cubic-bezier(0.65, 0.05, 0.36, 1);
`;

export default vars;
