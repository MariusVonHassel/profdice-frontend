import { SET_PAGETYPE } from "./types";

export function setPageType(pageType) {
    return {
        type: SET_PAGETYPE,
        payload: {
            pageType,
        }
    }
}