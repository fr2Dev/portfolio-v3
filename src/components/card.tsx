import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledCard, BrowserNav } from './styled';
import { NewWindow, Github } from './images';

interface CardProps {
  children: React.ReactNode;
  variant?: string;
  externalLink?: string;
  github?: string;
}

const Card = ({ children, variant, externalLink, github }: CardProps) => {
  const { t } = useTranslation();

  if (variant === 'browser') {
    return (
      <div style={{ width: '100%' }}>
        <BrowserNav>
          <span className="circles"></span>
          {github && (
            <a
              href={github}
              aria-label={t('Links.GotoGithub')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
          )}
          {externalLink && (
            <a
              href={externalLink}
              aria-label={t('Links.GotoSite')}
              target="_blank"
              rel="noopener noreferrer"
            >
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
