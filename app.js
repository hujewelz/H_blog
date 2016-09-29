var express = require('express');
var path = require('path')
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.set('views', __dirname+'/views/pages');
app.set('view engine', 'pug');

app.listen(port);
console.log('service is running on prot' + port);

var router = require('./routes/index');
router(app);

