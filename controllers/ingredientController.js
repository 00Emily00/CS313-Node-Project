const ingredientsModels = require("./../models/ingredientModel.js");

const { Pool } = require("pg");
//connection needed to connect to the database --the server, etc
const connectionString = process.env.DATABASE_URL || "postgres://familyhistoryuser:emily@localhost:5432/familyhistory";
const pool = new Pool({connectionString: connectionString});


function getIngredients(req, res) {
    ingredientsModels.ingredients(pool, function(results) {
        //add if statement for err
       res.json(results); 
    });
    
    console.log("It actually went into getIngredients(req,res) in the controller");
}

module.exports = {
    getIngredients: getIngredients
};

//function postIngredients(req, res) {
//    ingredientsModels.insertIngredients(pool, function(results) {
//        res.json(results);
//    });
//}