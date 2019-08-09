var express = require('express');

var logger = require('morgan');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;


app.use(methodOverride());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(logger('dev'));

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));
app.use('/list',require('./routes/files'))
app.use('/new',require('./routes/new'))
app.use('/open',require('./routes/open'))
app.use('/save',require('./routes/save'))
app.use('/remove',require('./routes/delete'))


app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
