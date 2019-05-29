const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		fs.readFile('./login.html', 'UTF-8', function(error, file) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(file);
		});
	} else if (req.url === '/signUp') {
		fs.readFile('./sign_up.html', 'UTF-8', function(error, file) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(file);
		});
	} else if (req.url === '/login') {
		fs.readFile('./login.html', 'UTF-8', function(error, file) {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(file);
		});
	}
});

server.listen(3000);
console.log('Listening on port 3000');
