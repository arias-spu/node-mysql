const http=require('http');
const hostname='localhost';
const port=3000;

var mysql=require('mysql');

var connection=mysql.createConnection({
	host: "localhost",
	user: "rob",
	password: "Drax1999!",
	database: "rob"
});

connection.connect(function(err){
	if (err) throw err;
	console.log("Connected!");
	connection.query("SELECT * FROM Question LIMIT 5", function(err, result, fields){
		if (err) throw err;
		console.log(result);

		});
});

const server = http.createServer((req, res) => {
	res.statusCode=200;
	res.setHeader('Content-type','text/plain');
	res.end('Hello World\n');
});

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
