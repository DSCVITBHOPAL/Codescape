import React from 'react';
import styled from 'styled-components';

import { BodyHeader, BodyText } from 'components/typography';
import palette from 'assets/palette';

const FaqBlock = ({ answerText }) => {
  return (
    <Container>
      {/* <BodyHeader style={{ color: palette.white, marginBottom: 20 }}>
        {questionText}
      </BodyHeader> */}
      <BodyText style={{ color: palette.white }}>{answerText}</BodyText>
    </Container>
  );
};

export default FaqBlock;

const Container = styled.div``;
