import React from 'react';
import styled from 'styled-components';
import Section from 'components/Section';
import Navbar from './components/Navbar';
import CountdownTimer from './components/CountdownTimer/CountdownTimer'
import RegisterButton from 'components/RegisterButton';
import landingBackgroundImg from './components/landing-background.svg';
import logo from './components/logo.svg'
import gdscLogo from './components/gdsc-logo.png'

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
          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingTop: 75 }}>
            <GDSCLogo src={gdscLogo} />

            <Subtitle>AdVITya Fest | April 23, 2022</Subtitle>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <CodeScapeLogo src={logo} />
            <a
              href="https://gdsc.community.dev/events/details/developer-student-clubs-vellore-institute-of-technology-vit-bhopal-presents-advitya22-codescape/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <RegisterButton><CountdownTimer countdownTimestampMs={1659983662000}/></RegisterButton>
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
  /* padding-top: 200px; */
  margin-bottom: 40px;
`;
const GDSCLogo = styled.img`
  width: 200px;
  margin-bottom: 50px;
  padding: 0px 30px;
`
const CodeScapeLogo = styled.img`
  width: 100%;
  max-width: 400px;
  margin-bottom: 50px;
  padding: 0px 30px;
`;
