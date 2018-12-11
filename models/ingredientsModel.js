function ingredients(pool, callback) {
    
     var q = "SELECT ingredients,quantity,calories,foodgroup FROM ingredients";
    
    pool.query(q, function(err, results) {
        callback(results.rows);
    });
}

module.exports = {
    ingredients: ingredients
}