import React from 'react';
import { About } from '../../components/layouts';
import { Card, Avatar, AnimationOnScroll } from '../../components';
import { TwitterLink, TechList } from '../../components/styled';
const SectionAbout = () => {
  return (
    <section className="flow" id="about">
      <h3>About me</h3>
      <About>
        <div>
          <AnimationOnScroll from="left">
            <Card variant="browser">
              <p style={{ marginBottom: '10px' }}>
                Hi ! 👋 I am a self-taught developer, passionate about the web and love to create
                stuff. I eventually graduated in web development at{' '}
                <TwitterLink href="#">@OpenClassrooms</TwitterLink> and still look forward to
                learning new things every day. Currently at{' '}
                <TwitterLink href="#">@Filae</TwitterLink>, I work on a wide variety of interesting
                and meaningful projects on a daily basis.
              </p>
              <p>Here are a few technologies I've been working with recently:</p>
              <TechList as="ul" wrap="wrap">
                <li>React</li>
                <li>Typescript</li>
                <li>jQuery</li>
                <li>SCSS</li>
                <li>HTML</li>
                <li>Wordpress</li>
                <li>Git</li>
              </TechList>
            </Card>
          </AnimationOnScroll>
        </div>
        <Avatar title="François Degrincourt" titleId="Avatar François Degrincourt" />
      </About>
    </section>
  );
};

export default SectionAbout;
