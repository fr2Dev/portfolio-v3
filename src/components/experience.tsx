import React from 'react';
import { IExperience } from '../definitions/interfaces';
import { Card } from './';
import { TwitterLink, TechList, Comment, Tasks } from './styled';
// TODO: refactor in a component for each cards with data exported from content

interface ExperienceProps {
  content: IExperience;
}

const Experience = (props: ExperienceProps) => {
  const { title, company, tasks, techs } = props.content;
  const { name, twitter, period, location } = company;
  return (
    <Card variant="experience">
      <h4>
        <span>{title}</span>{' '}
        <TwitterLink $tertiary href={twitter} target="_blank">
          @{name}
        </TwitterLink>
      </h4>
      <Comment>{`// ${period}`}</Comment>
      <Comment>{`// ${location}`}</Comment>
      <Tasks>
        {tasks.map((task, i) => (
          <li key={i.toString()}>{task}</li>
        ))}
      </Tasks>
      <TechList as="ul" $wrap="wrap">
        {techs.map((tech, i) => (
          <li key={i.toString()}>{tech}</li>
        ))}
      </TechList>
    </Card>
  );
};

export default Experience;
