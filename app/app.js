//Imports for:
var express = require('express');
var body_parser = require('body-parser');
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');

var app = express();
//Configuring express to use body-parser as middlewear
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

//Over what port to communicate with the database,
//and which database
//By default, mongo talks over port 27017.
var db_loc = "mongodb://localhost:27017/local"

//Testing our connection to the database
//Standard piece of debugging code.
mongodb.connect(db_loc, function(err, db) {
	if (err) { return err; }
	console.log("connection with server established");
	db.close();
})

var debug_json =　{
}
//-----Helper functions-----//

//update_db will insert the json document parsed from http-post
//into the database for the specified time if the time slot is
//not already occupied. This will also be a useful debounce mechanism.
function update_db(db, json, callback) {
	//TODO: Implement function to parse through json and act accordingly
	db.collection('tasks', function(err, item_info) {
		assert.equal(err, null);

	})
}

function find_item(db, selector, callback) {
	db.collection('tasks', function(err, item_info) {
		assert.equal(err, null);

		console.log("selector: " + JSON.stringify(selector))

		item_info.find(selector).toArray(function(err, docs) {
			callback(docs);
		})
	})
}

//Simple hello world functionality to see if the server is communicating
app.get('/', function (req, res) {
	mongodb.connect(db_loc, function(err, db) {
		assert.equal(err, null);

		find_item(db, {}, function(result) {
			res.send(JSON.stringify(result));
			db.close();
		});
	})
});

app.get('/add', function (req, res) {
	mongodb.connect(db_loc, function(err, db) {
		assert.equal(err, null);

		update_db(db, debug_json, function() {
			res.send("database updated!");
			db.close();
		});

	})
});


//This will handle database requests
app.post('/', function (req, res){
	mongodb.connect(db_loc, function(err, db) {
		update_db(db, debug_json, function() {
			db.close();
		})
	})
})

//This gets the server communicating over port 3000.
//Standard http port is port 80, will be switched to eventually.
app.listen(3001, '0.0.0.0', function () {
	console.log("successfully binded to port 3000");
});
