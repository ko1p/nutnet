import './VideoStory.scss';
import { openVideoPopup } from '../../store/actions/actions'
import { useSelector, useDispatch } from 'react-redux';
import Popup from '../Popup/Popup';

function VideoStory() {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const openVideo = () => {
    dispatch(openVideoPopup())
  }

  return (
    <>
    <section className="video">
        <div className="video__container" onClick={openVideo}>
            <div className="video__icon"></div>
            <span className="video__text" >WATCH OUR STORY</span>
        </div>
    </section>
    { state.videoPopupIsOpened && <Popup /> }
    </>
  );
}

export default VideoStory;