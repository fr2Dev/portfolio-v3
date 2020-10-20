import React from 'react';
import styled, { css } from 'styled-components';

interface CardProps {
  children: React.ReactNode;
  experience?: boolean;
}

const Card = ({ children, experience }: CardProps) => {
  return <StyledCard experience={experience}>{children}</StyledCard>;
};

interface StyledCardrops {
  experience?: boolean;
}

const StyledCard = styled.div`
  --padding: calc(var(--base) * 1.25);

  background-color: var(--clr-grey);
  border-radius: var(--radius);
  box-shadow: 0 4px 4px rgba(3, 3, 3, 0.25);
  padding: var(--padding);

  ${(props: StyledCardrops) =>
    props.experience &&
    css`
      & > * + * {
        margin-left: 0.5rem;
      }
    `};
`;

export default Card;
