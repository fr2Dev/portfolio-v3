import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Rocket } from './images';
import { ScrollButton as Wrapper } from './styled';

const ScrollButton = () => {
  const { t } = useTranslation();
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    }, 750);
  };

  window.addEventListener('scroll', checkScrollTop);
  return (
    <Wrapper
      onClick={scrollTop}
      style={{ display: showScroll ? 'flex' : 'none' }}
      title={t('BackToTop')}
    >
      <span>
        <Rocket />
      </span>
    </Wrapper>
  );
};

export default ScrollButton;
