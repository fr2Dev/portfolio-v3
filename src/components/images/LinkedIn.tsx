import * as React from 'react';
import { SvgIcon } from './styled';
import { ISvg } from '../../definitions/interfaces';

const SvgComponent = ({ title, ...props }: ISvg) => {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      aria-labelledby={title}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
    </SvgIcon>
  );
};

export default SvgComponent;