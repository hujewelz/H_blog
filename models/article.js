var mongodb = require('./db')
var ObjectId = require('mongodb').ObjectID;

function Article(article) {
	this.title = article.title;
	this.author = article.author;
	this.context = article.context;
	this.date = article.date
};

module.exports = Article;

Article.prototype.save = function(callback) {
	var article = {
			title: this.title,
			author: this.author,
			context: this.context,
			date: this.date
	};
	
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}
		console.log('save article:'+JSON.stringify(article));
		var collection = db.collection('article');
		collection.insert(article, {
			safe: true
		}, function(err, docs) {
			db.close();
			if (err) {
				return callback(err);
			}
			console.log('insert successfully: '+docs);
			callback(err, docs);
				
		});
	});
}


//获取所有文章
Article.fetch = function(callback) {
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}

		var collection = db.collection('article');
		collection.find().toArray(function(err, docs) {
			db.close();
			if (err) {
				return callback(err);
			}
			callback(err, docs);
				
		});
	});
};

//根据id获取文章
Article.findById = function(id, callback) {
	mongodb.open(function(err, db) {
		if (err) {
			return callback(err);
		}

		var collection = db.collection('article');
		collection.findOne({
			_id: ObjectId(id)
		}, function(err, doc) {
			db.close();
			if (err) {
				return callback(err);
			}
			console.log(doc);
			callback(err, doc);
			
		});
		
	});
};