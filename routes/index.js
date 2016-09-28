var mongoose = require('mongoose');
var Article = require('../models/article');
//mongoose.connect('mongodb://127.0.0.1:12345/test');

//index page
module.exports = function(app) {

	//home page
	app.get('/', function(req, res) {

		Article.fetch(function(err, articles) {
			if (err) {
				console.log(err);
			}
			console.log(articles);
			res.render('index', {
			  title: '首页',
			  articles: articles
			});
		});
	});

//detail page
	app.get('/detail/:id', function(req, res) {
		var id = req.params.id;
		console.log('article id='+req.params.id);
		Article.findById(id, function(err, article) {
			res.render('detail', {
				title: article.title,
				article: article
			});
		});
	});

}