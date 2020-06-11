import React from 'react';
import { Router,Switch, Route } from 'dva/router';
// import AppPage from '../../pages/app'
import routes from './routeslist'
const Routers = function ( {history, app}){
    // const routes = [
    //     {
    //         path:'/',
    //         name:'AppPage',
    //         component:AppPage,
    //     }
    // ]
    
    return (
        <Router history={history}>
            <Switch>
                {
                    routes.map( ({path,name,component}) => {
                        return (
                            <Route path={path} key={name} exact component={component} />
                        )
                    })
                }
            </Switch>
        </Router>
    ) 
}
export default Routers