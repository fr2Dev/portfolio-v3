import React from 'react';
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

function App() {
  return (
    <MainWrapper className={classBrowser}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container className="App">
          <Header />
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
    </MainWrapper>
  );
}

export default App;
