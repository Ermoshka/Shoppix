import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {BrowserRouter as Router} from "react-router-dom"

import {App} from "./components/app"
import ErrorBoundry from "./components/error-boundary"
import {ShopifixServiceProvider} from "./components/shopifix-service-context"

import ShopifixService from "./services/shopifix-service"

import store from "./store"
import "./style.scss"

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <ShopifixServiceProvider value={new ShopifixService()}>
                <Router>
                    <App />
                </Router>
            </ShopifixServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById("root")   
)