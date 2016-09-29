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
