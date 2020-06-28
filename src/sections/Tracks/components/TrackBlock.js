import React from 'react';
import { BodyHeader, BodyText } from 'components/typography';

import palette from 'assets/palette';
import styled from 'styled-components';

const TrackBlock = ({ info }) => {
  return (
    <Container>
      <img
        src={info.image}
        alt="Track"
        style={{ height: 175, width: '100%' }}
      />

      <BodyHeader style={{ margin: '40px auto 0px auto' }}>
        {info.title}
      </BodyHeader>

      <BodyText
        style={{ fontSize: '21px', marginTop: 35, verticalAlign: 'text-top' }}
      >
        {info.description}
      </BodyText>
    </Container>
  );
};

export default TrackBlock;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 80px 35px;
  margin: 20px 20px;
  border-radius: 10px;
  background-color: ${palette.white};

  @media (max-width: 700px) {
    margin: 20px 0px;
  }

  /* MEDIA QUERY FOR SMALLER SCREENS*/
  /* margin: 70px auto; */
`;
