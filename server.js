


var express =require("express");
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var routes = require("./controllers/routes.js");

app.use(express.static(__dirname + "public"));

var app = express();
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);
var PORT = process.env.PORT || 3000;
// app.listen(PORT, function() {
//   console.log("Listeng on port:%s", PORT);
// });
app.listen(port);