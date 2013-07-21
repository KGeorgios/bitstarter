var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

var mybuffer = new Buffer(100);
var stringlength=mybuffer.write(fs.readFileSync("index.html", 'utf8'));

app.get('/', function(request, response) {
  response.send(mybuffer.toString('utf8', 0, stringlength));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
