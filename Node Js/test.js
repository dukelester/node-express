var express = require('express');
let app = express();

app.set('view engine','jade');
app.get('/', function(req, res){

});
var server = app.listen(3000, function (){

});


var exports = module.exports = {};
exports.AddNumbers = function (a, b){
    return a + b
}