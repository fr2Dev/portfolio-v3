import React from 'react';
import useWindowSize from './hooks/useMedia';
import { ThemeProvider } from 'styled-components';
import { Card, Menu, MenuMobile } from './components';
import { GlobalStyle, theme } from './style';
import { MainWrapper, Container, Row, Experience, Contact } from './components/layouts';
import { SectionProjects, SectionHero, SectionAbout } from './components/sections';
import { Nav, Button, TwitterLink, TechList, Comment, Tasks } from './components/styled';
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
            <section className="flow" id="experience">
              <h3>Where I’ve worked</h3>
              <Experience>
                <Card variant="experience">
                  <h4>
                    <span>Front End Developer</span> <TwitterLink href="#">@Filae</TwitterLink>
                  </h4>
                  <Comment>// Period: April 2019 - Present </Comment>
                  <Comment>// Place: 75 - Paris</Comment>
                  <Tasks>
                    <li>Integration</li>
                    <li>UI fix & update</li>
                    <li>Newsletter & mailing</li>
                    <li>Visual creation</li>
                  </Tasks>
                  <TechList as="ul" wrap="wrap">
                    <li>React</li>
                    <li>JS</li>
                    <li>jQuery</li>
                    <li>SCSS</li>
                    <li>Wordpress</li>
                    <li>Photoshop</li>
                  </TechList>
                </Card>
                <Card variant="experience">
                  <h4>
                    <span>IT Developer</span> <TwitterLink href="#">@Jimenez_FVA</TwitterLink>
                  </h4>
                  <Comment>// Period: June - September 2018</Comment>
                  <Comment>// Place: 31 - Villeneuve-lès-Bouloc</Comment>
                  <Tasks>
                    <li>Creation of a management tool</li>
                    <li>Integration</li>
                    <li>Front-end</li>
                    <li>Back-end</li>
                  </Tasks>
                  <TechList as="ul" wrap="wrap">
                    <li>JS</li>
                    <li>jQuery</li>
                    <li>CSS</li>
                    <li>PHP</li>
                    <li>SQL</li>
                  </TechList>
                </Card>
              </Experience>
            </section>
            <SectionProjects />
            <Contact className="flow" id="contact">
              <h3>Get In Touch</h3>
              <Card variant="message">
                Although I'm not currently looking for any new opportunities,{' '}
                <span className="highlight">my inbox is always open</span>. Whether you have a
                question or just want to say hello, I'll try my best to get back to you!
              </Card>
              <Button as="a" href="mailto:francois.degrincourt@gmail.com" outlined>
                Say Hi
              </Button>
            </Contact>
          </main>
        </Container>
      </ThemeProvider>
    </MainWrapper>
  );
}

export default App;
