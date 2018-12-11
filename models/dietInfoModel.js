function getAllInfo(pool, callback) {
    //get all recipes from DB swap this out for database stuff
    //callback call me when done
    var DBinfo = "SELECT topics, information FROM diet_info";
    
    pool.query(DBinfo, function(err, results) {
            callback(results.rows);
    });
    
    
    module.export = {
        getAllInfo: getAllInfo
    }