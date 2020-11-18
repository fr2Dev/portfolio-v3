import * as React from 'react';
import { SvgIcon } from './styled';
import { ISvg } from '../../definitions/interfaces';

const SvgComponent = ({ title, ...props }: ISvg) => {
  return (
    <SvgIcon viewBox="0 0 128 128" aria-labelledby={title} {...props}>
      {title ? <title>{title}</title> : null}
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M64 5a60 60 0 00-19 118c3 0 4-2 4-3v-11c-17 3-20-7-20-7-3-7-7-9-7-9-6-4 0-4 0-4 6 0 10 6 10 6 5 9 14 7 17 5l4-8c-13-1-28-7-28-30 0-6 3-12 7-16-1-1-3-8 0-16 0 0 5-1 17 6a58 58 0 0130 0c12-7 17-6 17-6 3 8 1 15 0 16 4 4 7 10 7 16 0 24-15 29-28 30 2 2 4 6 4 11v17c0 1 1 3 4 3A60 60 0 0064 5z"
        />
        <path d="M26 92h-1v-1h1v1zm3 3l-1-1v-1h1v2zm2 3l-1-1v-1l1 1v1zm4 3h-2v-1h1l1 1zm4 2l-1 1-1-1 1-1 1 1zm5 1l-1 1-2-1 2-1 1 1zm5-1l-2 1-1-1 1-1 2 1zm0 0" />
      </g>
    </SvgIcon>
  );
};

export default SvgComponent;
