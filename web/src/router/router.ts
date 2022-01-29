import {createBrowserHistory, Location} from "history";
import {put, takeLatest} from 'redux-saga/effects'
import {push} from "connected-react-router";


export const history = createBrowserHistory({
    basename:'te'
})

const ROUTE_TYPE = "portal-router#route";

type RouteAction = {
    type: "portal-router#route",
    path: string
}

export function goto(path: string): RouteAction {
    return {
        path,
        type: ROUTE_TYPE
    }
}

export function* gotoSaga({path}: RouteAction) {
    yield put(push(path))
}

function* gotoRouteSaga() {
    yield takeLatest(ROUTE_TYPE, gotoSaga)
}

export const routeSagas = [gotoRouteSaga]

type RouterHookType = {
    goto: (path: string) => void,
    path: Location<unknown>,
    pagination?: PaginationSpec
}

export type PaginationSpec = {
    first: number,
    after: number
}

// export function useRouter(): RouterHookType {
//
//     const dispatch = useDispatch();
//     const path: Location<unknown> = useSelector<ConsumerAppState, Location<unknown>>(state => state.router.location);
//
//     let searchParams = new URLSearchParams(path.search);
//
//     return {
//         goto(path: string) {
//             dispatch(goto(path))
//         },
//         path,
//         get pagination() {
//             let first = searchParams.get("first");
//             let after = searchParams.get("after");
//
//             if (!!first && !!after) {
//                 return {
//                     first: parseInt(first),
//                     after: parseInt(after)
//                 }
//             }
//         }
//     }
// }