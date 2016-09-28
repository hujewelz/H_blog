// var mongoose = require('mongoose');
// var ArticleSchema = require('./schema');
// var Article = mongoose.model('Article', ArticleSchema);

// module.exports = Article;

var mongodb = require('./db')

function Article(article) {
	this.title = article.title;
	this.author = article.author;
	this.context = article.context;
};

module.exports = Article;

Article.fetch = function(callback) {
	mongodb.open(function(err, db) {
		if (err) {
			callback(err);
		}
		var collection = db.collection('article');
		collection.find().toArray(function(err, docs) {
				callback(err, docs);
				db.close();
		});
	});
};