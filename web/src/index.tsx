import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import configureStore from "./rootReducer/store";
import {Provider} from "react-redux";
import {MainUi} from "./views/MainUi/MainUi";
import {I18nextProvider} from "react-i18next";
import i18n from "./i18next/i18next";

const store = configureStore();

function Root() {

    return (
        <I18nextProvider i18n={i18n}>
            <Provider store={store}>
                    <MainUi/>
            </Provider>
        </I18nextProvider>
    );
}

ReactDOM.render(<Root/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
