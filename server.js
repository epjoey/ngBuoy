var app = require('express.io')()
  , express = require('express')
  , _ = require('underscore');

app.http().io();
app.use(express.static(__dirname + '/'));
app.use(express.cookieParser());
app.use(express.session({secret: 'express.io makes me happy'}));

// All calls to res.render() will look in the views dir
app.set('view engine', 'jade');
app.set('views', __dirname + '/');

// Initial web requests...most simple server ever
app.get('/*', function(req, res) {
    res.render('client');
});

// app.io.route('locations', function(req) {
//     //req.io.emit('res', controllers.Locations.getData());
//     req.io.emit('locations', { "ob": "obeezy" });
// });


app.listen(7076);
console.log('Listening on port 7076');