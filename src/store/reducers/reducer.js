import initialState from '../initialState';
import { OPEN_VIDEO_POPUP, CLOSE_VIDEO_POPUP, TOGGLE_MOBILE_MENU } from "../actions/actionTypes";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_VIDEO_POPUP: {
            return {
                ...state,
                videoPopupIsOpened: true
            }
        }
        case CLOSE_VIDEO_POPUP: {
            return {
                ...state,
                videoPopupIsOpened: false
            }
        }
        case TOGGLE_MOBILE_MENU: {
            return {
                ...state,
                mobileMenuIsOpened: !state.mobileMenuIsOpened
            }
        }
        default: return state;
    }
}