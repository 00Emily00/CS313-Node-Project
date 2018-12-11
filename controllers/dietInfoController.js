const infoModels = require("./../models/dietInfoModel.js");

const { Pool } = require("pg");
//connection needed to connect to the database --the server, etc
const connectionString = process.env.DATABASE_URL || "postgres://familyhistoryuser:emily@localhost:5432/familyhistory";
const pool = new Pool({connectionString: connectionString});

function getDietInformation(req, res) {
     console.log("Getting diet information");
    var id = req.query.id;
    
    //this calls the function in the model and function(results) brings back resuls from the callback in the model
    infoModels.getAllInfo(pool, function(results) {
        res.json(results); //sents it back to the client
    });
}

module.exports = {
    getDietInformation: getDietInformation
};

//handling user request
//send things to the model
//eventually send stuff to the client
