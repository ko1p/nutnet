import './App.scss';
import HeaderCover from '../HeaderCover/HeaderCover';
import OurStory from '../OurStory/OurStory';
import VideoStory from '../VideoStory/VideoStory';
import Expertise from '../Expertise/Expertise';
import Team from '../Team/Team';

function App() {
  return (
    <main className="app">
      <HeaderCover />
      <OurStory />
      <VideoStory />
      <Expertise />
      <Team />
    </main>
  );
}

export default App;
