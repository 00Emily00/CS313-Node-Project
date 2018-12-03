var express = require("express");
var app = express();

const { Pool } = require("pg");
//connection needed to connect to the database --the server, etc
const connectionString = process.env.DATABASE_URL || "postgres://:emily@localhost:5432/dietplanproject";
const pool = new Pool({connectionString: connectionString});
app.set("port", (process.env.PORT || 5000));

app.get("/login" , getLogin); //endpoint
app.get("/diet", getDiet);
//app.get("/dietInformation"); //do i need this if single page website?
//app.get("/recipes")

app.listen(app.get("port"), function() {
    console.log("Now listening for connections on port: ", app.get("port"));
});

function getLogin(req, res) {
    console.log("getting login information");
} 

function getDiet(req, res) {
    console.log("getting diet information");
}

CREATE USER loginUser WITH PASSWORD 'user';
GRANT SELECT, INSERT, UPDATE ON login TO loginUser;
GRANT USAGE, SELECT ON SEQUENCE login_id_seq TO loginUser;