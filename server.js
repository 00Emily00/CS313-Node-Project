var express = require("express");
var app = express();
const path = require("path");
//var http = require('http');
//var fs = require('fs');
const recipeController = require("./controllers/recipeController.js");
const dietInfoController = require("./controllers/dietInfoController.js");
 
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json()); //support json encoded bodies
app.use(express.urlencoded({extended: true})); //support url encoded bodies



app.get("/recipes", recipeController.getRecipe);
app.get("/dietInformation",dietInfoController.getDietInformation);


//app.get("/information", );

//app.post("/recipes", recipeController.postRecipe);

app.listen(PORT, function() {
    console.log("listening on port " + PORT);
});





//
//const { Pool } = require("pg");
//
////connection needed to connect to the database --the server, etc
//const connectionString = process.env.DATABASE_URL || "postgres://:emily@localhost:5432/dietplanproject";
//
//const pool = new Pool({connectionString: connectionString});
//
//app.set("port", (process.env.PORT || 5000));
//
//http.createServer(function (req, res) {
//    fs.readFile('navigation.html', function(err, data) {
//        res.writeHead(200, {'Content-Type' : 'text/html'});
//        res.write(data);
//        res.end();
//    });
//});
//
//app.get("/login" , getLogin); //endpoint
//app.get("/diet", getDiet);
////app.get("/dietInformation", getDietInformation);
////app.get("/recipes:id", getRecipes);
//
//app.listen(app.get("port"), function() {
//    console.log("Now listening for connections on port: ", app.get("port"));
//});
//
//function getLogin(req, res) {
//    console.log("getting login information");
//    res.write("Got login information");
////    res.send("Login information");
//} 
//
//function getDiet(req, res) {
//    console.log("getting diet information");
//}










//
//let handleRequest = (req, res) => {
//    res.writeHead(200, {
//        'Content-Type': 'text/plain'
//    });
//    fs.readFile('./navigation.html',null,function(error, nav) {
//        if(error) {
//            res.writeHead(404);
//            res.write('file not found');
//        } else {
//            res.write(nav);
//        }
//        res.end();
//    });
//};
//function getRecipesFromId(id, callback) {
//    console.log("getRecipesFromId called with id ", id);
//    
//    var sql = "SELECT id FROM recipe_name";
//    var params = [id];
//    
//    pool.query(sql, params, function(err, result) {
//       if(err) {
//           console.log("An error with the DB occured");
//           console.log(err);
//           callback(err, null);
//       } 
//        console.log("Found DB result: " + JSON.stringify(result.rows));
//        callback(null, result.rows)
//    });
//}