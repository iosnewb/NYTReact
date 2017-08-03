
// SERVER DEPENDENCIES  =========================================================================================
var express     = require('express');
var bodyParser  = require('body-parser');
var logger      = require('morgan');
var mongoose    = require('mongoose');

//require the Articles schema
var Articles = require('./models/articles');

//create a new express app
var app = express();
//set the initial port 
var PORT = process.env.PORT || 3000;

//run morgan for logging server requests
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//set up middleware for static files
app.use(express.static('public'));


// DATABASE CONFIG ==============================================================================================
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

db.on('error', function(err) {
    console.log('Mongoose Error: ', err);
});
db.once('open', function() {
    console.log('Mongoose connection successful');
})


// REQUEST HANDLERS =============================================================================================
//main route, this will redirect the user to the rendered react application
app.get('/', function(req, res) {
    res.sendfile(__dirname + '/public/index.html');
});

//this route will send the Get requests to retreive our most recent articles
//we will call this route the moment our page is rendered
app.get('/api', function(req, res) {
    Articles.find({}, function(err, doc) {
        if(err) throw err;
        res.send(doc);
    });
});

app.post('/api', function(req, res) {

});


// STARTING THE EXPRESS SERVER ==================================================================================