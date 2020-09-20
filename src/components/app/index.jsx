import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import CartPage from '../pages/CartPage'
import { Navbar } from '../navbar'

export const App = () => {
    return (

        <Fragment>
            <Navbar />
            <Switch>
                <Route 
                    path="/" 
                    component={HomePage}
                    exact />
                <Route 
                    path="/cart"
                    component={CartPage}
                    exact />
            </Switch>
        </Fragment>
        
    )
}
