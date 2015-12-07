var fs = require('fs');

routes = {
  '/index.html': function(req, res) {
    res.setHeader("Content-Type", "text/html");
	var readStream = fs.createReadStream('./index.html');
	readStream.on('open', function() {
		readStream.pipe(res);
	})
	readStream.on('close', function() {
		res.end();
	})
  },
  '/': function(req, res) {
	res.setHeader("Content-Type", "text/html");
	res.statusCode = 200;
	var readStream = fs.createReadStream('./intro.html');
	readStream.on('open', function() {
		readStream.pipe(res);
	})
	readStream.on('close', function() {
		res.end();
	})
  },
  '/style.css': function(req, res) {
    res.setHeader("Content-Type", "text/css");
	fs.readFile('./style.css', function(err, data) {
		if (err) {
			throw err;
		}
		res.write(data);
		res.end();
	})
  },
  '/about.html': function(req, res) {
    res.setHeader("Content-Type", "text/html");
	var readStream = fs.createReadStream('./about.html');
	readStream.on('open', function() {
		readStream.pipe(res);
	})
	readStream.on('close', function() {
		res.end();
	})
  }
};

module.exports = routes;
