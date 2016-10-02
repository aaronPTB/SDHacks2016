import express from 'express';
import assert from 'assert';
import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import config from './webpack.config.js';

const mongodb = require('mongodb').MongoClient;
const app = express();
const compiler = webpack(config);

//Configuring express to use body-parser as middlewear
//app.use(body_parser.urlencoded({ extended: false }));
//app.use(body_parser.json());

//Configuring express to use webpack as middlewear
app.use(webpackMiddleware(compiler));

//Pointing to the directory /static for static files
app.use(express.static(__dirname + '/static'));


//Over what port to communicate with the database,
//and which database
//By default, mongo talks over port 27017.
var db_loc = "mongodb://localhost:27017/local"

//Simple hello world functionality to see if the server is communicating
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, "static/index.html"))
});

//Testing our connection to the database
//Standard piece of debugging code.
mongodb.connect(db_loc, function(err, db) {
	if (err) { return err; }
	console.log("connection with server established");
	db.close();
})

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


//This gets the server communicating over port 3000.
//Standard http port is port 80, will be switched to eventually.
app.listen(3000, '0.0.0.0', function () {
	console.log("successfully binded to port 3000");
});
