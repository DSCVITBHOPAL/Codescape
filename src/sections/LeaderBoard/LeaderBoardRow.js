import React, { useState } from 'react';
import { BodyHeader, BodyText } from 'components/typography';
import styled from 'styled-components';
import palette from 'assets/palette';

const LeaderBoardRow = ({ info }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <EventRow>
      <EventTime>
        {info.rank}
        <br />
        {/* {info.end} */}
      </EventTime>
      <EventInfo>
        <BodyHeader>{info.name}</BodyHeader>
        <BodyText>{info.description}</BodyText>
        {/* <BodyText style={{fontSize:16}}>{info.link}</BodyText> */}
        <a href={"https://github.com/" + info.link} target='_blank'
            style={{fontSize:16, opacity:'50%'}}>
          {info.link}
        </a>
        {info.score && (
          <div>
            {isOpen && (
              <BodyText style={{ marginTop: 10 }}>{info.score}</BodyText>
            )}
            <p onClick={() => setIsOpen((v) => !v)}>
               {isOpen ? 'Hide' : 'Show'} Score
            </p>
          </div>
        )}
      </EventInfo>
    </EventRow>
  );
};

export default LeaderBoardRow;

const dateColSmWidth = '120px';

const EventRow = styled('div')`
  display: flex;
  line-height: 1.44em;

  :first-child > div {
    padding-top: 40px;
  }
  :last-child > div {
    padding-bottom: 100px;
  }
`;

const EventTime = styled('div')`
  flex-basis: ${dateColSmWidth};
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;

  font-weight: 500;
  font-size: 20px;
  padding: 15px 25px;
`;
const EventInfo = styled('div')`
  padding: 17px 35px;

  @media (max-width: 700px) {
    padding: 17px 20px;
  }
`;
