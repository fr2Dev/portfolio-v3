import { css } from 'styled-components';
import { DefaultTheme } from '../styled';

const getCssVars = (theme: DefaultTheme) => {
  const { palette, base, borderRadius } = theme;
  const { common, primary, secondary, tertiary } = palette;
  const { white, grey } = common;

  return css`
    --clr-main: ${primary.main};
    --clr-main-lighter: ${primary.lighter};
    --clr-secondary: ${secondary.main};
    --clr-tertiary: ${tertiary.main};
    --clr-white: ${white};
    --clr-grey: ${grey};
    --radius: ${borderRadius};
    --base: ${base};
    --transition: 0.15s cubic-bezier(0.65, 0.05, 0.36, 1);
  `;
};

export default getCssVars;
