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
  const x = 5;
  const y = 2.5;
  const axe = origin === 'top' || origin === 'bottom' ? 'Y' : 'X';
  console.log(
    '%c☘ %ccondition%c:',
    'font-weight:bold;color: #0F9D58;font-size:1.2em;',
    'font-weight:bold;border-bottom:2px solid #0F9D58;',
    'font-weight:bold;',
    origin == ('top' || 'bottom')
  );
  console.log(
    '%c☘ %corigin%c:',
    'font-weight:bold;color: #f00;font-size:1.2em;',
    'font-weight:bold;border-bottom:2px solid #f00;',
    'font-weight:bold;',
    origin
  );
  console.log(
    '%c☘ %caxe%c:',
    'font-weight:bold;color: #0F9D58;font-size:1.2em;',
    'font-weight:bold;border-bottom:2px solid #0F9D58;',
    'font-weight:bold;',
    axe
  );
  let start;
  switch (origin) {
    case 'top':
      start = `-${y}`;
      break;

    case 'right':
      start = `${x}`;
      break;
    case 'bottom':
      start = `${y}`;
      break;

    case 'left':
      start = `-${x}`;
      break;

    default:
      break;
  }
  console.log(
    '%c☘ %cstart%c:',
    'font-weight:bold;color: #0F9D58;font-size:1.2em;',
    'font-weight:bold;border-bottom:2px solid #0F9D58;',
    'font-weight:bold;',
    start
  );
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
  }, [noScroll]);
  return (
    <Wrapper $animate={show} $from={from} $delay={delay} ref={ref}>
      {children}
    </Wrapper>
  );
};

export default AnimationOnScroll;
