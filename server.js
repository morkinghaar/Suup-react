var path = require('path');
var express = require('express');



var port = 8000;
var app = express();

app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});




app.listen(port, ()=> {
  console.log('Im listening: '+port);
});
