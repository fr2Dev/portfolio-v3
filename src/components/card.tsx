import React from "react";
import styled from "styled-components";

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children } : CardProps) => {
  return <StyledCard>{children}</StyledCard>;
};

const StyledCard = styled.div`
  background-color: var(--clr-grey);
  border-radius: var(--radius);
  box-shadow: 0 4px 4px rgba(3, 3, 3, 0.25);
  padding: calc(var(--base) * 1);
`;

export default Card;
