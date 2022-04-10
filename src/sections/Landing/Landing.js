import React from 'react';
import styled from 'styled-components';

import Section from 'components/Section';
import Navbar from './components/Navbar';
import RegisterButton from 'components/RegisterButton';
import landingBackgroundImg from './components/landing-background.svg';
import logo from './components/logo.svg'

const Landing = () => {
  return (
    <Section
      // sectionColor="#333232"
      innerContainerStyles={{ padding: 0, maxWidth: 1500 }}
      sectionId="landing"
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          backgroundImage: `url(${landingBackgroundImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div style={{ paddingTop: 30, paddingBottom: 300 }}>
          <Navbar />
          <Subtitle>AdVITya Fest | April 23, 2022</Subtitle>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CodeScapeLogo src={logo} />
            <a
              href="https://ideate.devpost.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RegisterButton>See Submissions</RegisterButton>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Landing;

const Subtitle = styled.p`
  font-size: 18px;
  color: #f8f0e7;
  text-align: center;
  padding-top: 200px;
  margin-bottom: 40px;
`;

const CodeScapeLogo = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 50px;
  padding: 0px 30px;
`;
