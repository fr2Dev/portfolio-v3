import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './style';
import { defaultTheme, secondaryTheme } from './style/theme';
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
  const [theme, setTheme] = React.useState(defaultTheme);
  const resetTheme = () => setTheme(defaultTheme);
  const updateTheme = () => setTheme(secondaryTheme);
  const { borderRadius, base, palette } = theme;

  return (
    <MainWrapper className={classBrowser}>
      <ThemeProvider theme={theme}>
        <GlobalStyle borderRadius={borderRadius} base={base} palette={palette} />
        <Container className="App">
          <Header />
          <main>
            <button onClick={resetTheme}>Default</button>
            <button onClick={updateTheme}>Second</button>
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
