function ingredients(pool, callback) {
    
     var DBinfo = "SELECT ingredients,quantity,calories,foodgroup FROM ingredients";
    
    pool.query(DBinfo, function(err, results) {
        callback(results.rows);
    });
}

function insertingredients(pool,ingredients, quantity, calories, foodgroup,callback) {
    
    var DBinfo = "INSERT INTO ingredients(ingredients,quantity, calories, foodgroup)VALUES()";
    
    pool.query(DBinfo, function(err, results) {
        callback(results.rows);
    });
}

module.exports = {
    ingredients: ingredients
}