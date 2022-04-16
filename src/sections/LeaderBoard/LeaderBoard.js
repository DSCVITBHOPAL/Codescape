import React from 'react';
import Section from 'components/Section';
import { MainHeader } from 'components/typography';
import LeaderBoardItemCard from './LeaderBoardItemCard';
import LeaderBoardInfo from './LeaderBoardInfo';
import palette from 'assets/palette';
import styled from 'styled-components';

export default class Schedule extends React.Component {
  render() {
    const leaderboard = LeaderBoardInfo[0];
    // const sunday = scheduleInfo[1];

    return (
      <Section sectionColor={palette.red} sectionId="leaderboard">
        <MainHeader style={{ color: palette.white }}>LEADERBOARD</MainHeader>
        <LeaderBoardContainer>
          <OverallRankingDiv>
            <OverallRankingHeader>Overall Rankings</OverallRankingHeader>
            <LeaderBoardItemCard leaderboard={leaderboard.leaderboard} />
          </OverallRankingDiv>

          {/* <Day>
            <DateHeader>Sunday July 26</DateHeader>
            <ScheduleItemCard events={sunday.events} />
          </Day> */}
        </LeaderBoardContainer>
      </Section>
    );
  }
}

const LeaderBoardContainer = styled('div')`
  width: 100%;
  margin: 75px auto;
  text-align: center;

  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const OverallRankingDiv = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
  margin-right: 5px;
`;
const OverallRankingHeader = styled('div')`
  color: white;
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 32px;
  margin-top: 32px;
`;
