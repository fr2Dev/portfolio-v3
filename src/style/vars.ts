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
`;

export default vars;
