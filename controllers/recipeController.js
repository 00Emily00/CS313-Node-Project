const recipeModels = require("./../models/recipeModel.js");

function getRecipe(req, res) {
    console.log("Getting the recipes");
    var id = req.query.id;
    
    recipeModels.getAllRecipes(function(results) {
        res.json(results);
    });
}
   
}

 recipeModels.insertNewRecipe(name,steps, function(results) {
        res.json(results);
    }); //this is the function we want to call when the function in recipeModel is done  
 

recipeModels.getRecipeById(id, function(results) {
    res.json(results);
});


//function postRecipe(req, res) {
//    var name = req.body.name;
//    console.log("Creating a new recipe");
//    
// recipeModels.insertNewRecipe(name,steps, function(results) {
//        res.json(results);
//    });
//}
    

module.exports = {
    getRecipe: getRecipe,
    postRecipe: postRecipe
};
        