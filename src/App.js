import React from 'react';
import Landing from 'sections/Landing/Landing';
import About from 'sections/About/About';
import Tracks from 'sections/Tracks/Tracks';
import Speakers from 'sections/Speakers/Speakers';
import LeaderBoard from 'sections/LeaderBoard/LeaderBoard';
import Faq from 'sections/Faq/Faq';
import Sponsors from 'sections/Sponsors/Sponsors';
import Footer from 'sections/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Tracks />
      {/* <Speakers /> */}
      <LeaderBoard />
      <Faq />
      {/* <Sponsors /> */}
      <Footer />
    </div>
  );
}

export default App;
