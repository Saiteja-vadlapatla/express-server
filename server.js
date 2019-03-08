var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.use(cors());
//app.use(bodyParser);
var people = [
    { "firstName": "Alan", "lastName": "Turing" },
        { "firstName": "Alanzo", "lastName": "Church" },
        { "firstName": "Grace", "lastName": "Hopper" }
];

app.get('/', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    res.send('Hello World!');
});

app.get('/people', function (req, res) {
    res.header('Access-Control-Allow-Origin', "*");
    res.send(people);
});

app.post('/people', function(req, res) {
    console.dir(req.body)
    res.header('Access-Control-Allow-Origin', "*");
    
    //people.push
    res.send(people);
})
var server = app.listen(3009, function () { });