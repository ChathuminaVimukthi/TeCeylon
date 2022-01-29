import produce from "immer"

import {call, put, takeLatest} from "redux-saga/effects";
import {LoadingStatus, usePortalStateSelector} from "../../rootReducer/actions";
import {getUsers, UserProfile} from "../../api/apiCalls";

export enum HomePageEvent {
    RESET = "RESET",
    GET_HOME_PAGE_DATA = "GET_HOME_PAGE_DATA",
    GET_HOME_PAGE_DATA_RESULT = "GET_HOME_PAGE_DATA_RESULT"

}

export interface GetHomePageAction {
    type: HomePageEvent.GET_HOME_PAGE_DATA
}

export interface GetHomePageResultsAction {
    type: HomePageEvent.GET_HOME_PAGE_DATA_RESULT,
    results: UserProfile []
}

export type HomePageAction = GetHomePageAction
    | GetHomePageResultsAction

export interface HomePageData {
    loadingStatus: LoadingStatus,
    users?: UserProfile [] //This is just for testing
}

const initialState = {
    loadingStatus: LoadingStatus.LOADING_STARTED,
    notification: {
        show: false
    }
};

export function homePageReducer(state: HomePageData = initialState, action: HomePageAction) {
    return produce(state, draft => {
            switch (action.type) {

                case HomePageEvent.GET_HOME_PAGE_DATA: {
                    break;
                }

                case HomePageEvent.GET_HOME_PAGE_DATA_RESULT: {
                    draft.loadingStatus = LoadingStatus.LOADING_SUCCESS;
                    draft.users = action.results;
                    //TODO set any other value to the state here
                    break;
                }
            }
        }
    )
}

export function useHomePageDataSelector(): HomePageData {
    return usePortalStateSelector<HomePageData>(ev => ev.homePageData)
}

export const homePageSagas = [getHomePageDataSaga/*, getConfigDataSaga, requestModuleMoreInfoSaga*/];

function* getHomePageDataSaga() {
    yield takeLatest(HomePageEvent.GET_HOME_PAGE_DATA, callGetHomePageData)
}

// function* getConfigDataSaga() {
//     yield takeLatest(PortalEvent.GET_CONFIG_DATA, callGetConfigData)
// }
//
// function* requestModuleMoreInfoSaga() {
//     yield takeLatest(PortalEvent.REQUEST_MODULE_MORE_INFO, callRequestModuleMoreInfo)
// }

function* callGetHomePageData(action: GetHomePageAction) {
    try {
        // const result = yield call(getUsers, action.registrationToken);
        const {results} = yield call(getUsers);
        console.log("Response received ==> ", results);
        yield put({
            type: HomePageEvent.GET_HOME_PAGE_DATA_RESULT,
            results: results
        });
    } catch (e) {
        console.error(e);
        // yield put({type: RegisterUserEvent.LOAD_INVITATION_ERROR})
    }
}
