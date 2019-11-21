import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Login from './Login';
import Menu from './index/Index';
import Users from './Users';
import Pieces from './pieces'

const localAuthentication = () =>{
    var retorno = false;
    retorno = sessionStorage.getItem("email") == null ? false : true;

    return retorno;
};

const PrivateRoute = ({ component: Component , ...rest }) =>(
    <Route {...rest} render={props =>(
        localAuthentication() ? (
            <Component {...props} />
        ) : ( 
          <Redirect to={{ pathname: '/', state: { from: props.location}}}/>
        )
    )}/>
)

const Routes = ()=> (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/Menu' component={Menu}/>
            <PrivateRoute path='/Usuarios' component={Users}/>
            <PrivateRoute path='/Pecas' component={Pieces}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;