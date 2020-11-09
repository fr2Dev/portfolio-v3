import * as React from 'react';
import styled from 'styled-components';

interface SvgComponentProps {
  title: string;
}

const SvgComponent = ({ title, ...props }: SvgComponentProps) => {
  return (
    <SvgStyled
      width={413}
      height={244}
      viewBox="0 0 413 244"
      fill="none"
      aria-labelledby={title}
      {...props}
    >
      <path
        d="M409 187h-37a12 12 0 001-6V12c0-3-1-6-3-8a12 12 0 00-9-4H75l-5 1a12 12 0 00-4 3 12 12 0 00-3 4 12 12 0 00-1 4v169a12 12 0 001 6H25a3 3 0 00-2 1 3 3 0 00-1 2v3a18 18 0 005 13 18 18 0 0013 5h354a18 18 0 0013-5 18 18 0 005-13v-3a3 3 0 00-1-2 3 3 0 00-2-1zm-228 10l-3-3h79l-4 3h-72z"
        fill="url(#prefix__paint0_linear)"
      />
      <path
        d="M79 3h277c7 0 13 6 13 13v162c0 8-6 13-13 13H79c-7 0-13-5-13-13V16c0-7 6-13 13-13z"
        fill="#20123A"
        className="fill--primary stroke--secondary"
        stroke="#88FFD1"
      />
      <path
        opacity={0.5}
        d="M73 184V31h289v153H73z"
        fill="url(#prefix__paint1_linear)"
        className="stroke--secondary"
        stroke="#88FFD1"
      />
      <path
        d="M219.403 16.52a2.065 2.065 0 01-2.061 2.071 2.066 2.066 0 01-2.061-2.07c0-1.146.925-2.07 2.061-2.07 1.137 0 2.061.924 2.061 2.07z"
        fill="#20123A"
        className="fill--primary stroke--tertiary"
        stroke="#D6E6FF"
      />
      <path
        d="M252 196h1l9-10h143a3 3 0 012 2v3c0 5-2 9-5 12a17 17 0 01-12 5H44a17 17 0 01-12-5 18 18 0 01-5-12v-3l1-2a3 3 0 012 0h143l8 10h71z"
        fill="#20123A"
        className="fill--primary stroke--secondary"
        stroke="#88FFD1"
      />
      <path
        d="M163 35H40a11 11 0 00-8 4 11 11 0 00-3 8v170a11 11 0 003 8 11 11 0 008 3h123a11 11 0 007-3 11 11 0 004-8V47a11 11 0 00-4-8 11 11 0 00-7-4z"
        fill="url(#prefix__paint2_linear)"
      />
      <path
        d="M42 38h119c6 0 11 5 11 11v166c0 6-5 11-11 11H42c-6 0-11-5-11-11V49c0-6 5-11 11-11z"
        fill="#20123A"
        className="fill--primary stroke--secondary"
        stroke="#88FFD1"
      />
      <path
        opacity={0.5}
        d="M38 208V56h126v152H38z"
        fill="url(#prefix__paint3_linear)"
        className="stroke--secondary"
        stroke="#88FFD1"
      />
      <path
        d="M101.932 46.425a1.23 1.23 0 01-1.226 1.233 1.23 1.23 0 01-1.227-1.233c0-.682.551-1.233 1.227-1.233s1.226.55 1.226 1.233z"
        fill="#20123A"
        className="fill--primary stroke--tertiary"
        stroke="#D6E6FF"
      />
      <path
        d="M105 217a5 5 0 11-9 0 5 5 0 019 0z"
        fill="#20123A"
        className="fill--primary stroke--secondary"
        stroke="#88FFD1"
      />
      <path
        d="M69 93H6a6 6 0 00-4 2 6 6 0 00-2 4v139a6 6 0 002 4 6 6 0 004 2h63a6 6 0 006-4 6 6 0 000-2V99a6 6 0 00-1-4 6 6 0 00-5-2z"
        fill="url(#prefix__paint4_linear)"
      />
      <path
        d="M7 95h61c4 0 6 2 6 6v136c0 3-2 6-6 6H7c-3 0-6-3-6-6V101c0-4 3-6 6-6z"
        fill="#20123A"
        className="fill--primary stroke--secondary"
        stroke="#88FFD1"
      />
      <path
        opacity={0.5}
        d="M7 229V109h62v120H7z"
        fill="url(#prefix__paint5_linear)"
        className="stroke--secondary"
        stroke="#88FFD1"
      />
      <path
        d="M30 101h0s0 0 0 0h0zm4 0h11s0 0 0 0h0-11 0s0 0 0 0z"
        fill="#20123A"
        className="fill--primary stroke--tertiary"
        stroke="#D6E6FF"
      />
      <path
        d="M41 235a4 4 0 01-4 4 4 4 0 01-3-4 4 4 0 013-3 4 4 0 014 3z"
        fill="#20123A"
        className="fill--primary stroke--secondary"
        stroke="#88FFD1"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={217}
          y1={211.3}
          x2={217}
          y2={0}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="gray" stopOpacity={0.3} />
          <stop offset={0.5} stopColor="gray" stopOpacity={0.1} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear"
          x1={217.3}
          y1={184.6}
          x2={217.3}
          y2={30.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="gray" stopOpacity={0.3} />
          <stop offset={0.5} stopColor="gray" stopOpacity={0.1} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__paint2_linear"
          x1={68759.4}
          y1={122659}
          x2={68759.4}
          y2={58226.8}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="gray" stopOpacity={0.3} />
          <stop offset={0.5} stopColor="gray" stopOpacity={0.1} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__paint3_linear"
          x1={101.3}
          y1={208.6}
          x2={101.3}
          y2={56.1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="gray" stopOpacity={0.3} />
          <stop offset={0.5} stopColor="gray" stopOpacity={0.1} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__paint4_linear"
          x1={27397.7}
          y1={99997.7}
          x2={27397.7}
          y2={60648}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="gray" stopOpacity={0.3} />
          <stop offset={0.5} stopColor="gray" stopOpacity={0.1} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
        <linearGradient
          id="prefix__paint5_linear"
          x1={37.7}
          y1={229.4}
          x2={37.7}
          y2={108.6}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="gray" stopOpacity={0.3} />
          <stop offset={0.5} stopColor="gray" stopOpacity={0.1} />
          <stop offset={1} stopColor="gray" stopOpacity={0.1} />
        </linearGradient>
      </defs>
    </SvgStyled>
  );
};

const SvgStyled = styled.svg`
  display: none;
  position: absolute;
  right: 0;
  top: 50%;
  top: calc(50% - 3rem);
  transform: translateY(-50%);
  width: 35rem;
  height: auto;

  .fill--primary {
    fill: ${({ theme }) => theme.palette.primary.main};
  }

  .stroke {
    &--secondary {
      stroke: ${({ theme }) => theme.palette.secondary.main};
    }
    &--tertiary {
      stroke: ${({ theme }) => theme.palette.tertiary.main};
    }
  }

  @media only screen and (min-width: 1440px) {
    display: block;
  }
`;

export default SvgComponent;
