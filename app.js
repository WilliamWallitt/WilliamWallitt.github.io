// require modules
var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    methodOverride = require("method-override")

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.get('/', function(req, res) {
    res.render('index.ejs')
})

// undefined route
app.get('*', function(req, res){
    res.send('Error. Page Not Found!');
});


// listening

app.listen(3000, function(){
    console.log('Server Has Started!');
});