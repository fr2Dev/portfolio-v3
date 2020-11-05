import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './style';
import { MainWrapper, Container } from './components/layouts';
import {
  Header,
  SectionProjects,
  SectionHero,
  SectionAbout,
  SectionExperiences,
  SectionContact,
  Footer,
} from './components/blocks';
import './style/fonts.css';

const isChrome = /chrome/i.test(navigator.userAgent);
const classBrowser = !isChrome ? 'not-chrome' : '';

const App = () => {
  // const { t, i18n } = useTranslation();
  // const changeLanguage = (language: string) => {
  //   i18n.changeLanguage(language);
  // };

  return (
    <MainWrapper className={classBrowser}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container className="App">
          <Header />
          <main>
            {/* <button onClick={() => changeLanguage('en')}>EN</button>
            <button onClick={() => changeLanguage('fr')}>FR</button>
            <h1>{t('description.part1')}</h1> */}
            <SectionHero />
            <SectionAbout />
            <SectionExperiences />
            <SectionProjects />
            <SectionContact />
          </main>
          <Footer />
        </Container>
      </ThemeProvider>
    </MainWrapper>
  );
};

export default App;
