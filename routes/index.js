var Article = require('../models/article');

//index page
module.exports = function(app) {
	//home page
	app.get('/', function(req, res) {
		Article.fetch(function(err, articles) {
			if (err) {
				console.log(err);
				return res.redirect('error');

			}
			res.render('index', {
			  title: '首页',
			  articles: articles
			});
		});
	});

//detail page
	app.get('/detail/:id', function(req, res) {
		var id = req.params.id;
		Article.findById(id, function(err, article) {
			if (err) {
				return res.redirect('error');

			}
			console.log(article);
			res.render('detail', {
				title: article.title,
				article: article
			});
		});
	});

	//post page
	app.get('/post', function(req, res) {
		res.render('post', {
				title: '发表文章'
				
			});
	});

	//submit article
	app.post('/article/post', function(req, res) {
		var body = req.body;
		
		var d = new Date();
		var newArticle = new Article({
			title: body.title,
			author: body.author,
			context: body.context,
			date: d.getFullYear()+'年'+d.getMonth()+'月'+d.getDate()+'日'
		});

		newArticle.save(function(err, article) {
			console.log('article='+article);
			if (err) {
				return res.redirect('error');
			}
			app.use('/', app);
			// res.render('detail', {
			// 	title: article.title,
			// 	article: article
			// });

		}); 

	});




}