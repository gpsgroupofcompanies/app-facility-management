import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import requireAuth from './Authentication/auth';
import Login from './Screens/Login/login';
import Landing from './Screens/Landing-Screen/landing';

export default class AppRoute extends Component {
    render() {
        console.log('app route')
        return (
            <Switch>
                <Route path="/login" exact component={Login}></Route>
                <Route exact component={requireAuth(Landing)} />
            </Switch>
        )
    }
}
