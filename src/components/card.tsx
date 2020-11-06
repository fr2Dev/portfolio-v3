import React from 'react';
import { StyledCard, BrowserNav } from './styled';

interface CardProps {
  children: React.ReactNode;
  variant?: string;
}

const Card = ({ children, variant }: CardProps) => {
  if (variant === 'browser') {
    return (
      <div>
        <BrowserNav>
          <span className="circles"></span>
        </BrowserNav>
        <StyledCard variant={variant}>{children}</StyledCard>
      </div>
    );
  }
  return <StyledCard variant={variant}>{children}</StyledCard>;
};

export default Card;
