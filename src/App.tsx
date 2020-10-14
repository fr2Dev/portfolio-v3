import React from 'react';
import { ThemeProvider } from 'styled-components';
import Avatar from './components/avatar';
import Card from './components/card';
import { GlobalStyle, theme } from './style';
import { MainWrapper, Container, Row } from './components/layoutComponents';
import { Nav, Button, ItemNav } from './components/styled';
import './style/fonts.css';

function App() {
  return (
    <MainWrapper>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Container className="App">
          <header>
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
                  <Button as="a" href="#">
                    Resume
                  </Button>
                </li>
                <li>
                  <Button as="a" outlined href="#">
                    Resume
                  </Button>
                </li>
              </Row>
            </Row>
          </header>
          <p>Hello, my name is</p>
          <h1>François Degrincourt</h1>
          <h2>I build stuff on the web</h2>
          <p>
            I'm a front-end developer based in Paris, France,
            <br /> specializing in building (and occasionally designing) amazing websites.
          </p>
          <Button as="a" href="#">
            Get in touch
          </Button>
          <h3>About me</h3>
          <section>
            <Card>
              <p>
                Hi ! 👋 I am a self-taught developer, passionate about the web and love to create
                stuff. I eventually graduated in web development at
                <a href="#">@OpenClassrooms</a> and still look forward to learning new things every
                day. Currently at <a href="#">@Filae</a>, I work on a wide variety of interesting
                and meaningful projects on a daily basis.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
              <ul>
                <li className="tech">React</li>
                <li className="tech">Typescript</li>
                <li className="tech">jQuery</li>
                <li className="tech">HTML & SCSS</li>
                <li className="tech">Wordpress</li>
                <li className="tech">Git</li>
              </ul>
            </Card>
            <Avatar title="François Degrincourt" titleId="Avatar François Degrincourt" />
          </section>
          <h3>Where I’ve worked</h3>
          <Card>
            <h4>
              IT Developer <a href="#">@Jimenez_FVA</a>
            </h4>
            <p>// June - September 2018</p>
            <p>// 31 - Villeneuve-lès-Bouloc</p>
            <ul>
              <li>Creation of an activity management tool</li>
              <li>Integration</li>
              <li>Front-end</li>
              <li>Back-end</li>
            </ul>
            <ul>
              <li className="tech">JS</li>
              <li className="tech">jQuery</li>
              <li className="tech">CSS</li>
              <li className="tech">PHP</li>
              <li className="tech">SQL</li>
            </ul>
          </Card>
          <Card>
            <h4>
              Front End Developer <a href="#">@Filae</a>
            </h4>
            <p>/* April 2019 - Present </p>
            <p>75 - Paris */</p>
            <ul>
              <li>Integration</li>
              <li>UI fix & update</li>
              <li>Newsletter & mailing</li>
              <li>Visual creation</li>
            </ul>
            <ul>
              <li className="tech">React</li>
              <li className="tech">JS</li>
              <li className="tech">jQuery</li>
              <li className="tech">SCSS</li>
              <li className="tech">Wordpress</li>
              <li className="tech">Photoshop</li>
            </ul>
          </Card>
          <h3>Some stuff I've made</h3>
          <h3>Get In Touch</h3>
          <div>
            Although I'm not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hello, I'll try my best to get back to
            you!
          </div>
          <Button>Say Hi</Button>
        </Container>
      </ThemeProvider>
    </MainWrapper>
  );
}

export default App;
