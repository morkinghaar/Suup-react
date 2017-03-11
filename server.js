require('import-export')
require('babel-core/register')({presets: ['es2015', 'react'] })
require.extensions['.scss'] = () => {
  return;
};
require.extensions['.css'] = () => {
  return;
};
var express = require('express')
var path = require('path')
var routes = require('./src/routes')
var renderToString = require('react-dom/server').renderToString
var reactRouter = require('react-router')
var match = reactRouter.match
var RouterContext = reactRouter.RouterContext
var fs = require('fs')
var react = require('react')


var port = 8000;
var app = express();

app.use(express.static('public'));



app.get('*', (req, res) => {
  const scream = () => res.status(404).send('404')
  fs.readFile(path.resolve(__dirname, './src/index.html'), 'utf-8', (error, htmlData) => {
    if(error){
      scream();
    } else {
      match({routes: routes.default, location: req.url}, (err, redirectLocation, props)=> {
        if (err) {
          res.status(500).send(error.message)
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (props) {
          const content = renderToString(react.createElement(RouterContext, props))
          const renderedHtml = htmlData.replace('Loading...', content)
          res.status(200).send(renderedHtml)
        } else {
          res.status(404).send('Not found')
        }
      });
    }
  });
});



console.log(__dirname);

app.listen(port, ()=> {
  console.log('Im listening: '+port);
});
