import * as React from 'react';
import styled from 'styled-components';

interface SvgComponentProps {
  title?: string;
}

const SvgComponent = ({ title, ...props }: SvgComponentProps) => {
  return (
    <SvgStyled width={20} height={20} viewBox="0 0 20 20" aria-labelledby={title} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M17 17H3V3h5V1H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-5h-2z" />
      <path d="M19 1h-8l3 3-5 6 1 1 6-5 3 3V1z" />
    </SvgStyled>
  );
};

const SvgStyled = styled.svg`
  width: 1rem;
  height: auto;
  fill: ${({ theme }) => theme.palette.newWindow};
`;

export default SvgComponent;
