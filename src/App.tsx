import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style';
import { useTheme } from './hooks';
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
import { ThemePicker } from './components';
import './style/fonts.css';

const isChrome = /chrome/i.test(navigator.userAgent);
const classBrowser = !isChrome ? 'not-chrome' : '';

const App = () => {
  const { theme, updateTheme } = useTheme();
  const { borderRadius, base, palette } = theme;

  return (
    <MainWrapper className={classBrowser}>
      <ThemeProvider theme={theme}>
        <GlobalStyle borderRadius={borderRadius} base={base} palette={palette} />
        <Container className="App">
          <Header />
          <main>
            <ThemePicker updateTheme={updateTheme} />
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
