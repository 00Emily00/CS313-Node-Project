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
    
    console.log("Inside postIngredients(req,res)");
    console.log(ingredients);
    console.log(quantity);
    console.log(calories);
    console.log(foodGroup);
    
    ingredientsModels.insertIngredients(pool, ingredients, quantity, calories, foodGroup,function(err, results) {
        
        if(err) {
            res.status(500).json({success:false, data:err});
        } else {
            results = {success:true};
            res.status(200).json(results);
        }
        //console.log("inserIngredients inside controller" + results);
    });
}


module.exports = {
    getIngredients: getIngredients,
    postIngredients: postIngredients
};
