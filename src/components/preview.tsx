import React from 'react';
import { Preview as Wrapper } from './layouts';
import { Card } from './';
import { TechList } from './styled';
import { IProject } from '../definitions/interfaces';

interface PreviewProps {
  data: IProject;
  reversed?: boolean;
}

const Preview = ({ data, reversed }: PreviewProps) => {
  const { url, img, title, content, techList } = data;
  const { src, alt } = img;

  return (
    <Wrapper $reversed={reversed}>
      <a href={url}>
        <img src={src} alt={alt} />
      </a>
      <div>
        <Card variant="browser">
          <h5>{title}</h5>
          <p>{content}</p>
          <TechList as="ul" $wrap="wrap">
            {techList.map((tech, i) => (
              <li key={i.toString()}>{tech}</li>
            ))}
          </TechList>
        </Card>
      </div>
    </Wrapper>
  );
};

export default Preview;
