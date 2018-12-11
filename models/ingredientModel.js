function ingredients(pool, callback) {
    
     var DBinfo = "SELECT ingredients,quantity,calories,foodgroup FROM ingredients";
    
    pool.query(DBinfo, function(err, results) {
        callback(results.rows);
    });
}

module.exports = {
    ingredients: ingredients
}