import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, match} from 'react-router';
import routes from './routes';
import {Provider} from 'mobx-react';
import Store from './stores/store.js'




match({history: browserHistory, routes: routes }, (error, redirectLocation, renderProps) => {
  console.log(Store)
  ReactDOM.render(
    <Provider store={Store}>
    <Router {...renderProps} />
    </Provider>,
    document.getElementById("main"));
});


// ReactDOM.render(<Router history={browserHistory}>{routes}</Router>,
//   document.getElementById("main")
// );
