function ingredients(pool, callback) {
    
     var DBinfo = "SELECT ingredients,quantity,calories,foodgroup FROM ingredients";
    
    pool.query(DBinfo, function(err, results) {
        callback(results.rows);
    });
}

function insertIngredients(pool,ingredients, quantity, calories, foodgroup,callback) {
    
    params = [ingredients,quantity,calories,foodgroup];
    
    var DBinfo = "INSERT INTO ingredients(ingredients,quantity, calories, foodgroup)VALUES($1::str,$2::str,$3::int,$4::str)";
    
    pool.query(DBinfo, params, function(err, results) {
        if(err) {
             console.log("Error in QUERY");
            console.log(err);
        }else
        console.log("Success");
        
    });
}

module.exports = {
    ingredients: ingredients,
    insertIngredients : insertIngredients
}