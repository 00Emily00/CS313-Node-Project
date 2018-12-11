function ingredients(pool, callback) {
    
     var q = "SELECT ingredients,quantity,calories,foodgroup FROM ingredients";
    
    pool.query(q, function(results) {
        callback(null,results.rows);
    });
}

module.exports = {
    ingredients: ingredients
}