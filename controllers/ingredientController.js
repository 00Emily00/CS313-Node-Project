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

function postIngredients(req,res) {
    
    var ingredients = req.body.ingredient;
    var quantity = req.body.quantity;
    var calories = req.body.calories;
    var foodGroup = req.body.foodgroup;
    
    ingredientsModels.insertIngredients(pool, function(results) {
        res.json(results);
    });
}


module.exports = {
    getIngredients: getIngredients,
    postIngredients: postIngredients
};

//function postIngredients(req, res) {
//    ingredientsModels.insertIngredients(pool, function(results) {
//        res.json(results);
//    });
//}