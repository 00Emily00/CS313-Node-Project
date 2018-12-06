function getAllRecipes(callback) {
    //get all recipes from DB swap this out for database stuff
    //callback call me when done
    var results = {
        recipes: [
            {id: 1, name: "Cereal", steps: "Put milk inside a bowl of cereal"},
            {id: 2, name: "Fruit Yogurt", steps: "Put fruit inside Yogurt"}
            ]
    }
    callback(results);
    //function(results) {  res.json(results) }); from recipeController.js
}
//
//function getRecipeById(id, callback) {
//    //get recipe from the DB that matches that id
//    var results = {id: id, name: "PB & J", steps: "Grab 2 slices of bread and put PB & J inside of it"};
//    
//    callback(results);
//}
//
//function insertNewRecipe(name, steps, callback) {
//    //create the new recipe in the database with the provided name
//    var results = {success: true};
//    
//    callback(results);
//}

module.exports = {
    getAllRecipes: getAllRecipes
//    getRecipeById: getRecipeById,
//    insertNewRecipe: insertNewRecipe
}