var MongoClient = require('mongodb').MongoClient;

function DB(url) {
	this.url = url;
};

DB.prototype.open = function(callback) {
	MongoClient.connect(this.url, function(err, db) {
		callback(err, db);
  });
};

module.exports = new DB('mongodb://localhost:12345/test');

// MongoClient.connect(url, function(err, db) {
// 	if (err) {
// 		return;
// 	}

// 	console.log("Connected successfully to server");
// 	// insertDocuments(db, function() {
// 	// 	findDocuments(db, function(docs) {
// 	// 		console.log(docs);
// 	// 		db.close();
// 	// 	});
// 	// });
// 	findDocuments(db, function(docs) {
// 			console.log(docs);
// 			db.close();
// 		});


// });

// var insertDocuments = function(db, callback) {

// 	var collection = db.collection('user');
// 	collection.insertMany([{a:1}, {a:1}, {a:1}], function(err, result) {

// 		if (err) {

// 		} else {
// 			callback(result);
// 		}

// 	});
// }

// var findDocuments = function(db, callback) {

// 	var collection = db.collection('article');
// 	collection.find().toArray(function(err, docs) {

// 		if (err) {

// 		} else {
// 			callback(docs);
// 		}

// 	});
// }