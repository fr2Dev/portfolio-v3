import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

type origin = 'top' | 'right' | 'left' | 'bottom';
interface DivStyledProps {
  animate: boolean;
  from: origin;
}
interface DivProps {
  children: React.ReactNode;
  from: origin;
}

const getTransformValues = (origin: origin) => {
  const x = 2.5;
  const y = 5;
  let axe;
  let start;
  switch (origin) {
    case 'top':
      axe = 'Y';
      start = `-${x}`;
      break;

    case 'right':
      axe = 'X';
      start = `${y}`;
      break;
    case 'bottom':
      axe = 'Y';
      start = `${x}`;
      break;

    case 'left':
      axe = 'X';
      start = `-${y}`;
      break;

    default:
      break;
  }
  return {
    start: `translate${axe}(${start}rem);`,
    end: `translate${axe}(0);`,
  };
};

const Wrapper = styled.div<DivStyledProps>`
  ${({ animate, from }) => {
    const values = getTransformValues(from);
    const { start, end } = values;

    return animate
      ? css`
          opacity: 1;
          transform: ${end};
        `
      : css`
          opacity: 0;
          transform: ${start};
        `;
  }}
  transition: opacity var(--transition), transform var(--transition);
  transition-duration: 1s;
`;

const AnimationOnScroll = ({ children, from }: DivProps) => {
  const [show, doShow] = useState(false);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const topPos = (element: any) => element.getBoundingClientRect().top;
    //added to reduce redundancy
    const elPos = topPos(ref.current);

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const extra = 100;
      if (elPos + extra <= scrollPos) {
        doShow(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      <Wrapper animate={show} from={from} ref={ref}>
        {children}
      </Wrapper>
    </>
  );
};

export default AnimationOnScroll;
