import { closeVideoPopup } from '../../store/actions/actions'
import { useDispatch } from 'react-redux';
import './Popup.scss';
import closeIcon from '../../images/close.svg'

function Popup() {
    const dispatch = useDispatch();

    const closePopup = () => {
        dispatch(closeVideoPopup());
    }

    return (
        <div className="popup">
            <div className="popup__container">
                <img className="popup__close" src={closeIcon} alt="close" onClick={closePopup} />
                <iframe title="youtube" className="popup__iframe" src="https://www.youtube.com/embed/KvUgaHTNit4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default Popup;