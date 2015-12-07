var http = require('http');
var fs   = require('fs');
var routes = require('./routes');

function handleRequest(req, res) {
	if (routes[req.url]) {
		routes[req.url](req, res);

	} else {
		res.statusCode = 404;
		res.setHeader('Content-Type', 'text/html');
		fs.readFile('./fourohfour.html', function(err, data) {
			if (err) {
				throw err;
			}
			res.write(data);
			res.end();
		})
    }
};

var server = http.createServer(handleRequest);

server.listen(8000, function() {
	console.log("I'm listening on port 8000...")
});
