const ingredientsModels = require("./../models/ingredientsModel.js");

const { Pool } = require("pg");
//connection needed to connect to the database --the server, etc
const connectionString = process.env.DATABASE_URL || "postgres://familyhistoryuser:emily@localhost:5432/familyhistory";
const pool = new Pool({connectionString: connectionString});


function getIngredients(req, res) {
//    ingredientsModels.ingredients(pool, function(err, results) {
//        //add if statement for err
//       res.json(results); 
//    });
//    
    console.log("We can do this");
}

module.exports = {
    getIngredients: getIngredients
};