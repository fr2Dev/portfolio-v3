import React from 'react';
import { Contact } from '../../components/layouts';
import { Card } from '../../components';
import { Button } from '../../components/styled';
const SectionContact = () => {
  return (
    <Contact className="flow" id="contact">
      <h3>Get In Touch</h3>
      <Card variant="message">
        Although I'm not currently looking for any new opportunities,{' '}
        <span className="highlight">my inbox is always open</span>. Whether you have a question or
        just want to say hello, I'll try my best to get back to you!
      </Card>
      <Button as="a" href="mailto:francois.degrincourt@gmail.com" outlined>
        Say Hi
      </Button>
    </Contact>
  );
};

export default SectionContact;
