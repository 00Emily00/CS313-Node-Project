var express = require("express");
var app = express();

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