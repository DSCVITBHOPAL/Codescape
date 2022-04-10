import React from 'react';
import Section from 'components/Section';
import { MainHeader, BodyHeader, BodyText } from 'components/typography';

import palette from 'assets/palette';
import styled from 'styled-components';
import rocket from './rocket.svg';

const About = () => {
  return (
    <Section sectionColor={palette.yellow} sectionId="about">
      <img
        src={rocket}
        style={{ display: 'block', margin: '-70px auto 20px auto' }}
        alt="About Icon"
      />
      <MainHeader>about?</MainHeader>

      <Paragraph>
        <BodyText style={{ marginTop: 20 }}>
          A 4 hr long coding competition to prove you are the pro coder, organised as part of the most extraordinary event of the year Aditya on 23/April.
          <BodyText style={{marginTop:20}}>
            Develop your skill and buckle up to win exciting prizes.
            </BodyText>
        </BodyText>
      </Paragraph>

      <Paragraph>
        <BodyText style={{ marginTop: 20 }}>
          We aim in fostering a sustainable coding culture on our campus.
        </BodyText>
      </Paragraph>
    </Section>
  );
};

export default About;

const Paragraph = styled.div`
  margin: auto;
  margin-top: 40px;
  width: 100%;
  max-width: 650px;
`;
