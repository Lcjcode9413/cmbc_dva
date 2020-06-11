import React from 'react';
import { Router, Route, Switch } from 'dva/router';

// import one from './routes/One';
import AppPage from './pages/app'
import dynamic from 'dva/dynamic';
export let history;
let outerScope = {
  set history(val) {
    history = val;
  },
};


function RouterConfig({ history, app }) {
  outerScope.history = history;

  const One = dynamic({
    app,
    component: () => import('./pages/one')
  });
  const Two = dynamic({
    app,
    component: () => import('./pages/two')
  });

  return (
    <Router history={history} >
      <Switch>

        <AppPage>
          <Route path="/" component={One} />
          <Route path="/Two" component={Two} />
        </AppPage>

      </Switch>
    </Router>
  );
}
// function RouterConfig({ history }) {
//   const routes = [
//     {
//       path:'/',
//       component:IndexPage,
//       indexRoute:{
//         onEnter:(nextState, replace) => replace('/IndexPage')
//       }
//     }
//   ]
//   return (
//     <Router history={history} routes={routes}/>
//   );
// }



export default RouterConfig;
