var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var mybuffer = new Buffer(fs.readFileSync("index.html"), 'utf8');

app.get('/', function(request, response) {
  response.send(mybuffer.toString('utf8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
