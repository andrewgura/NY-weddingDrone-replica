var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var sass = require('node-sass');

var app = express();

//
//View Engine: HandleBars
//
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
  defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');


//
//Use Sass
//
app.use(require('node-sass-middleware')({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true,
  sourceMap:true
}));

//
//Set up static folder for imgs,styles
//
app.use(express.static(path.join(__dirname, 'public')));


//
//Import and use routes
//
var routes = require('./routes/index');
app.use(routes);

//
// Set Port
//
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Server started on port ' + app.get('port'));
});
