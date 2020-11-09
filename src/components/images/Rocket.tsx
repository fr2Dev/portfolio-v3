import * as React from 'react';
import styled from 'styled-components';

interface SvgComponentProps {
  title?: string;
}

const SvgComponent = ({ title, ...props }: SvgComponentProps) => {
  return (
    <SvgStyled viewBox="0 0 297.001 297.001" aria-labelledby={title} {...props}>
      {title ? <title>{title}</title> : null}
      <path d="M51.083 201.623c-14.626 20.27-19.196 51.026-13.215 88.944.416 2.635 2.061 4.748 4.511 5.8 2.447 1.049 5.102.785 7.288-.724l44.786-30.886c-7.542-20.883-17.03-50.26-23.307-80.789-4.604 2.34-12.771 7.549-20.063 17.655zM245.919 201.623c-7.379-10.227-15.655-15.438-20.23-17.738-6.266 30.509-15.745 59.876-23.287 80.771l44.933 30.988c2.188 1.509 4.844 1.772 7.288.724 2.451-1.051 4.095-3.165 4.511-5.8 5.98-37.919 1.41-68.675-13.215-88.945zM154.193 2.127a8.933 8.933 0 00-11.568-.001c-9.193 7.776-21.629 19.688-33.096 35.24h77.761c-11.467-15.552-23.904-27.464-33.097-35.239zM216.115 101.94c-3.382-18.908-10.569-35.71-19.224-50.164H99.925C91.271 66.23 84.083 83.032 80.701 101.94c-10.017 56.008 22.633 146.426 32.879 172.805a8.905 8.905 0 008.353 5.721h19.271V186.52a7.205 7.205 0 0114.41 0v93.946h19.27a8.908 8.908 0 008.353-5.721c10.245-26.379 42.896-116.797 32.878-172.805zm-67.706 35.403c-20.221 0-36.672-16.451-36.672-36.671S128.189 64 148.409 64c20.22 0 36.671 16.452 36.671 36.672.001 20.22-16.45 36.671-36.671 36.671z" />
      <path d="M148.409 78.409c-12.275 0-22.262 9.987-22.262 22.262s9.987 22.261 22.262 22.261 22.261-9.986 22.261-22.261c0-12.275-9.985-22.262-22.261-22.262z" />
    </SvgStyled>
  );
};

export const SvgStyled = styled.svg`
  width: 1.8rem;
  height: auto;
  fill: ${({ theme }) => theme.palette.tertiary.main};
`;

export default SvgComponent;
