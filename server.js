import express from 'express'
import path from 'path'
import routes from './src/routes'
import {renderToString} from 'react-dom/server'
import reactRouter from 'react-router'
import {match} from 'react-router'
import {RouterContext} from 'react-router'
import fs from 'fs'
import React from 'react'
import Helmet from 'react-helmet'
import {Provider} from 'mobx-react'
import store from './src/stores/store'


var port = 8000;
var app = express();

app.use(express.static('public'));

const renderView = (renderProps, appState) => {

  const componentHTML = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
  );


  let head = Helmet.rewind();
  const htmlData = `<!doctype html>
                <html ${head.htmlAttributes.toString()}>
                    <head>
                        ${head.title.toString()}

                        <link rel="stylesheet" href="/assets/js/styles.css">
                    </head>
                    <body>
                      <div id="main">${componentHTML}</div>
                      <script type="text/javascript" src="/assets/js/bundle.js"></script>
                    </body>
                </html>`;
  return htmlData;
  }



app.get('/*', (req, res) => {
      match({routes: routes, location: req.url}, (err, redirectLocation, props)=> {
        if (err) {
          res.status(500).send(error.message)
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (props) {
          res.status(200).send(renderView(props, store))
        } else {
          res.status(404).send('Not found')
        }
      });
});



app.listen(port, ()=> {
  console.log('Im listening: '+port);
});
