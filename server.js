var express = require("express");
var app = express();

const { Pool } = require("pg");
//connection needed to connect to the database --the server, etc
const connectionString = process.env.DATABASE_URL || "postgres://:emily@localhost:5432/dietplanproject";
const pool = new Pool({connectionString: connectionString});
app.set("port", (process.env.PORT || 5000));

app.get("/login" , getLogin); //endpoint
app.get("/diet", getDiet);
//app.get("/dietInformation", getDietInformation);
//app.get("/recipes:id", getRecipes);

app.listen(app.get("port"), function() {
    console.log("Now listening for connections on port: ", app.get("port"));
});

function getLogin(req, res) {
    console.log("getting login information");

} 

function getDiet(req, res) {
    console.log("getting diet information");
}

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