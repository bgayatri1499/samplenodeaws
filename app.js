var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.get('/', function (req, res) {
    res.sendFile('app.html',{root:__dirname});
});

app.post('/submit-data', function (req, res) {
		var name = req.body.firstName+' '+req.body.lastName;
    res.send('Hi ' + name);
});
var port = process.env.port || 3000;
app.listen(port, function () {
  console.log('Example app listening on port 3000!');
});