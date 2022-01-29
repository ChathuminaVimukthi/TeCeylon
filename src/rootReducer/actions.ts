import {PortalState} from "./store";
import {shallowEqual, useSelector} from "react-redux";

export enum LoadingStatus {
    LOADING_STARTED = 1,
    LOADING_SUCCESS = 2,
    LOADING_ERROR = 3
}


export function usePortalStateSelector<T>(selector: (ev: PortalState) => T): T {
    return useSelector<PortalState, T>(ev => selector(ev), shallowEqual)

}
