import React from 'react';
import { ThemeProvider } from 'styled-components';
import { HelmetProvider } from 'react-helmet-async';
import 'babel-polyfill';
import { GlobalStyle } from './style';
import { useTheme } from './hooks';
import { SEO } from './components';
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
  const { theme, updateTheme } = useTheme();
  const { borderRadius, base, palette } = theme;

  return (
    <MainWrapper className={classBrowser}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle borderRadius={borderRadius} base={base} palette={palette} />
          <SEO />
          <Container className="App">
            <Header updateTheme={updateTheme} />
            <main>
              <SectionHero />
              <SectionAbout />
              <SectionExperiences />
              <SectionProjects />
              <SectionContact />
            </main>
            <Footer />
          </Container>
        </ThemeProvider>
      </HelmetProvider>
    </MainWrapper>
  );
};

export default App;
