import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';

class Router extends  React.Component {
    
    render(){
        return(
            <BrowserRouter>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
             </Switch>
         </BrowserRouter>

        )
    }
}

export default Router;