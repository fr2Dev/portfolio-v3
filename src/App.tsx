import React from 'react';
import { ThemeProvider } from 'styled-components';
import Avatar from './components/avatar';
import Card from './components/card';
import { GlobalStyle, theme } from './style';
import { MainWrapper, Container, Row, Hero, About, Experience } from './components/layouts';
import {
  Nav,
  Button,
  ItemNav,
  TwitterLink,
  Highlight,
  TechList,
  Header,
  Introduction,
  Comment,
  Tasks,
} from './components/styled';
import './style/fonts.css';

function App() {
  return (
    <MainWrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container className="App">
          <Header>
            <Row as={Nav}>
              <div>logo</div>
              <Row as="ul" mobile>
                <ItemNav>
                  <a href="#">About</a>
                </ItemNav>
                <ItemNav>
                  <a href="#">Experience</a>
                </ItemNav>
                <ItemNav>
                  <a href="#">Work</a>
                </ItemNav>
                <ItemNav>
                  <a href="#">Contact</a>
                </ItemNav>
                <li>
                  <Button as="a" outlined href="#">
                    Resume
                  </Button>
                </li>
              </Row>
            </Row>
          </Header>
          <main>
            <Hero>
              <p>👋 Hello, my name is</p>
              <h1>François Degrincourt</h1>
              <h2>I build stuff on the web</h2>
              <Introduction>
                I'm a <Highlight>front-end developer</Highlight> based in Paris, France,
                specializing in building (and occasionally designing) amazing websites.
              </Introduction>
              <Button as="a" href="#">
                Get in touch
              </Button>
            </Hero>
            <section className="flow">
              <h3>About me</h3>
              <About>
                <div>
                  <Card>
                    <p style={{ marginBottom: '10px' }}>
                      Hi ! 👋 I am a self-taught developer, passionate about the web and love to
                      create stuff. I eventually graduated in web development at{' '}
                      <TwitterLink href="#">@OpenClassrooms</TwitterLink> and still look forward to
                      learning new things every day. Currently at{' '}
                      <TwitterLink href="#">@Filae</TwitterLink>, I work on a wide variety of
                      interesting and meaningful projects on a daily basis.
                    </p>
                    <p>Here are a few technologies I've been working with recently:</p>
                    <TechList as="ul" wrap="wrap">
                      <li>React</li>
                      <li>Typescript</li>
                      <li>jQuery</li>
                      <li>HTML & SCSS</li>
                      <li>Wordpress</li>
                      <li>Git</li>
                    </TechList>
                  </Card>
                </div>
                <Avatar title="François Degrincourt" titleId="Avatar François Degrincourt" />
              </About>
            </section>
            <section className="flow">
              <h3>Where I’ve worked</h3>
              <Experience>
                <Card experience>
                  <h4>
                    Front End Developer <TwitterLink href="#">@Filae</TwitterLink>
                  </h4>
                  <Comment>// Period: April 2019 - Present </Comment>
                  <Comment>// Location: 75 - Paris</Comment>
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
                <Card experience>
                  <h4>
                    IT Developer <TwitterLink href="#">@Jimenez_FVA</TwitterLink>
                  </h4>
                  <Comment>// Period: June - September 2018</Comment>
                  <Comment>// Location: 31 - Villeneuve-lès-Bouloc</Comment>
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
            <section className="flow">
              <h3>Some stuff I've made</h3>
            </section>
            <section className="flow">
              <h3>Get In Touch</h3>
              <div>
                Although I'm not currently looking for any new opportunities, my inbox is always
                open. Whether you have a question or just want to say hello, I'll try my best to get
                back to you!
              </div>
              <Button>Say Hi</Button>
            </section>
          </main>
        </Container>
      </ThemeProvider>
    </MainWrapper>
  );
}

export default App;
