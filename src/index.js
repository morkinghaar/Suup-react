import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, match} from 'react-router';
import routes from './routes';





match({history: browserHistory, routes: routes }, (error, redirectLocation, renderProps) => {
  ReactDOM.render(<Router {...renderProps} />, document.getElementById("main"));
});


// ReactDOM.render(<Router history={browserHistory}>{routes}</Router>,
//   document.getElementById("main")
// );
