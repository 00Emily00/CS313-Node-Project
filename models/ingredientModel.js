function ingredients(pool, callback) {
    
     var DBinfo = "SELECT ingredients,quantity,calories,foodgroup FROM ingredients";
    
    pool.query(DBinfo, function(err, results) {
        callback(results.rows);
    });
}

function insertIngredients(pool,ingredients, quantity, calories, foodgroup,callback) {
    
    var DBinfo = "INSERT INTO ingredients(ingredients,quantity, calories, foodgroup)VALUES(" + ingredients + "," + quantity + "," + calories + "," + foodgroup + ")";
    
    pool.query(DBinfo, function(err, results) {
        console.log(results);
    });
}

module.exports = {
    ingredients: ingredients,
    insertIngredients : insertIngredients
}