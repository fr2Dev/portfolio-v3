import React from 'react';
import useWindowSize from './hooks/useMedia';
import { ThemeProvider } from 'styled-components';
import { Card, Menu, MenuMobile } from './components';
import { GlobalStyle, theme } from './style';
import { MainWrapper, Container, Row, Contact } from './components/layouts';
import {
  SectionProjects,
  SectionHero,
  SectionAbout,
  SectionExperience,
  SectionContact,
} from './components/sections';
import { Nav } from './components/styled';
import './style/fonts.css';

function App() {
  const size = useWindowSize();
  const { width } = size;
  const isMobile = width > 0 && width < 768;

  //TODO: Refactor logic

  return (
    <MainWrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container className="App">
          <header>
            <Row as={Nav}>
              <div style={{ display: 'none' }}>logo</div>
              {isMobile ? <MenuMobile /> : <Menu />}
            </Row>
          </header>
          <main>
            <SectionHero />
            <SectionAbout />
            <SectionExperience />
            <SectionProjects />
            <SectionContact />
          </main>
        </Container>
      </ThemeProvider>
    </MainWrapper>
  );
}

export default App;
