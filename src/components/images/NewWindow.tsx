import * as React from 'react';
import { SvgIcon } from './styled';
import { ISvg } from '../../definitions/interfaces';

const SvgComponent = ({ title, ...props }: ISvg) => {
  return (
    <SvgIcon width={20} height={20} viewBox="0 0 20 20" aria-labelledby={title} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z" />
      <path d="M19 1h-8l3 3-5 6 1 1 6-5 3 3V1z" />
    </SvgIcon>
  );
};

export default SvgComponent;
