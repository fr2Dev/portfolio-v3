import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

type origin = 'top' | 'right' | 'left' | 'bottom';
interface DivStyledProps {
  $animate: boolean;
  $from: origin;
  $delay?: number;
}
interface DivProps {
  children: React.ReactNode;
  from: origin;
  noScroll?: boolean;
  delay?: number;
}

const getTransformValues = (origin: origin) => {
  const x = 2.5;
  const y = 5;
  const axe = origin === ('top' || 'bottom') ? 'Y' : 'X';
  let start;
  switch (origin) {
    case 'top':
      start = `-${x}`;
      break;

    case 'right':
      start = `${y}`;
      break;
    case 'bottom':
      start = `${x}`;
      break;

    case 'left':
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
  ${({ $animate, $from }) => {
    const values = getTransformValues($from);
    const { start, end } = values;

    return $animate
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
  transition-duration: 0.75s;
  transition-delay: ${({ $delay }) => ($delay ? `${$delay}s` : '')};
`;

const AnimationOnScroll = ({ children, from, delay, noScroll }: DivProps) => {
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

    noScroll ? doShow(true) : window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Wrapper $animate={show} $from={from} $delay={delay} ref={ref}>
      {children}
    </Wrapper>
  );
};

export default AnimationOnScroll;
