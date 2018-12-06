const recipeModels = require("./../models/recipeModel.js");

const { Pool } = require("pg");
//connection needed to connect to the database --the server, etc
const connectionString = process.env.DATABASE_URL || "postgres://familyhistoryuser:emily@localhost:5432/familyhistory";
const pool = new Pool({connectionString: connectionString});


function getRecipe(req, res) {
    console.log("Getting the recipes");
    var id = req.query.id;
    
    //this calls the function in the model and function(results) brings back resuls from the callback in the model
    recipeModels.getAllRecipes(pool, function(results) {
        res.json(results); //sents it back to the client
    });
}
   


// recipeModels.insertNewRecipe(name,steps, function(results) {
//        res.json(results);
//    }); //this is the function we want to call when the function in recipeModel is done  
 

//recipeModels.getRecipeById(id, function(results) {
//    res.json(results);
//});


//function postRecipe(req, res) {
//    var name = req.body.name;
//    console.log("Creating a new recipe");
//    
// recipeModels.insertNewRecipe(name,steps, function(results) {
//        res.json(results);
//    });
//}
    

module.exports = {
    getRecipe: getRecipe
//    postRecipe: postRecipe
};
        