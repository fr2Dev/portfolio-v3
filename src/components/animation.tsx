import React, { useLayoutEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

interface DivStyledProps {
  animate: boolean;
}

interface DivProps {
  children: React.ReactNode;
}

const Div = styled.div<DivStyledProps>`
  ${({ animate }) =>
    animate
      ? css`
          opacity: 1;
          transform: translateY(0);
        `
      : css`
          opacity: 0;
          transform: translateY(-2.5rem);
        `}
  transition: opacity var(--transition), transform var(--transition);
  transition-duration: 1s;
`;

const Animation = ({ children }: DivProps) => {
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
      <Div animate={show} ref={ref}>
        {children}
      </Div>
    </>
  );
};

export default Animation;
