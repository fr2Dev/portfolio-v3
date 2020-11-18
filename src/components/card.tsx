import React from 'react';
import { StyledCard, BrowserNav } from './styled';
import { NewWindow, Github } from './images';

interface CardProps {
  children: React.ReactNode;
  variant?: string;
  externalLink?: string;
  github?: string;
}

const Card = ({ children, variant, externalLink, github }: CardProps) => {
  if (variant === 'browser') {
    return (
      <div style={{ width: '100%' }}>
        <BrowserNav>
          <span className="circles"></span>
          {github && (
            <a href={github} target="_blank">
              <Github />
            </a>
          )}
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
