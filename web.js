var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fs.readFileSync('/etc/passwd', function (err, data) {
	    if (err) throw err;
	      response.send(data);
  });
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
