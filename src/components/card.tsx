import React from 'react';
import { StyledCard, BrowserNav } from './styled';
import { NewWindow } from './images';

interface CardProps {
  children: React.ReactNode;
  variant?: string;
  externalLink?: string;
}

const Card = ({ children, variant, externalLink }: CardProps) => {
  if (variant === 'browser') {
    return (
      <div>
        <BrowserNav>
          <span className="circles"></span>
          {externalLink && (
            <a href={externalLink} target="_blank">
              <NewWindow />
            </a>
          )}
        </BrowserNav>
        <StyledCard variant={variant}>{children}</StyledCard>
      </div>
    );
  }
  return <StyledCard variant={variant}>{children}</StyledCard>;
};

export default Card;
