import {BrowserRouter} from 'react-router-dom';
import './App.scss';
import HeaderCover from '../HeaderCover/HeaderCover';
import OurStory from '../OurStory/OurStory';
import VideoStory from '../VideoStory/VideoStory';
import Expertise from '../Expertise/Expertise';
import Team from '../Team/Team';
import OurWorks from '../OurWorks/OurWorks';
import Reviews from '../Reviews/Reviews';
import NewsForm from '../NewsForm/NewsForm';
import Footer from '../Footer/Footer';

function App() {
  return (
    <BrowserRouter basename="/nutnet">
      <main className="app">
        <HeaderCover />
        <OurStory />
        <VideoStory />
        <Expertise />
        <Team />
        <OurWorks />
        <Reviews />
        <NewsForm />
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
