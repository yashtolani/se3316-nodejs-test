var http = require('http');

var server = http.createServer(function serveRequest(request, response) { response.writeHead(200, { "Content-Type": "text/plain" }); response.end("Hello World\n"); });

server.listen(process.env.PORT, process.env.IP); console.log("Server at IP:" + process.env.IP + " port: "+process.env.PORT);