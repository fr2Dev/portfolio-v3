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
} from './components/blocks';
import './style/fonts.css';

function App() {
  return (
    <MainWrapper>
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
        </Container>
      </ThemeProvider>
    </MainWrapper>
  );
}

export default App;
