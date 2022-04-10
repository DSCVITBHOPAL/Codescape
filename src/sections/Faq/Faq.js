import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';

import FaqBlock from './components/FaqBlock';
import faqInfo from './components/faqInfo';
import palette from 'assets/palette';
import faqBackgroundImg from './components/faq-background.svg';

const Faq = () => {
  const faqElems = faqInfo.map((faq, i) => {
    return (
      <FaqBlock
        key={i}
        // questionText={faq.questionText}
        answerText={faq.answerText}
      />
    );
  });

  return (
    <Section
      sectionColor={palette.black}
      innerContainerStyles={{
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 0,
        paddingRight: 0,
      }}
      sectionId="faq"
    >
      <ImgWrapper>
        <MainHeader style={{ color: palette.white, marginBottom: 50 }}>
          Rules
        </MainHeader>
        <MainContainer>{faqElems}</MainContainer>
      </ImgWrapper>
    </Section>
  );
};

export default Faq;

const MainContainer = styled.div`
  display: grid;
  column-gap: 50px;
  row-gap: 50px;
  /* grid-template-columns: repeat(2, minmax(200px, 1fr)); */
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;
  padding: 75px 75px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ImgWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px 0px;
  padding-bottom: 200px;
  background-image: url(${faqBackgroundImg});
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(1, 1fr);
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 700px) {
    background-image: none;
  }
`;
