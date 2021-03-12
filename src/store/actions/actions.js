import {OPEN_VIDEO_POPUP, CLOSE_VIDEO_POPUP, TOGGLE_MOBILE_MENU} from "./actionTypes";

export function openVideoPopup() {
    return {
        type: OPEN_VIDEO_POPUP,
    }
}

export function closeVideoPopup() {
    return {
        type: CLOSE_VIDEO_POPUP,
    }
}

export function toggleMobileMenu() {
    return {
        type: TOGGLE_MOBILE_MENU,
    }
}
