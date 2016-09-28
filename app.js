var express = require('express');
var path = require('path')
var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.bodyParser());
app.set('views', __dirname+'/views/pages');
app.set('view engine', 'pug');

app.listen(port);
console.log('service is running on prot' + port);

var router = require('./routes/index');
router(app);



