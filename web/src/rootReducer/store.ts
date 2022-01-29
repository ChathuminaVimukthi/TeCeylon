import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {all, fork} from "redux-saga/effects";
import {history, routeSagas} from "../router/router";
import {connectRouter, routerMiddleware, RouterState} from "connected-react-router";
import {HomePageData, homePageReducer, homePageSagas} from "../views/HomePage";

export interface PortalState {
    router: RouterState<unknown>,
    homePageData: HomePageData

}

const rootReducer = (history: any) => combineReducers<PortalState>({
    router: connectRouter(history),
    homePageData: homePageReducer
});

function* rootSaga() {
    let sagas = [
        ...routeSagas,
        ...homePageSagas
    ];

    yield all(sagas.map(s => fork(s)));
}


function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    //const logger = createLogger();
    const middlewares = [routerMiddleware(history), sagaMiddleware];
    const store = createStore(rootReducer(history), {}, applyMiddleware(...middlewares));
    sagaMiddleware.run(rootSaga);
    return store;
}

export default configureStore;


