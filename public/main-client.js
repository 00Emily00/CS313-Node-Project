function getInformation() {
    alert("woohoo you did step 2");
    console.log("Getting diet information");
    
    //updating the DOM
    var info = $("#dietFacts").val();
    console.log("Info" +info);
    
    //getting info from server.js
    $.get("/dietInformation", {info: info}, function(data) {
        console.log("Back from the server with:");
        console.log(data);
    });
}
function getRecipes() {
    var r = $("#recipes").val();
    
    $.get("/recipes", function(data) {
        alert(data);
    let list = "";
        for(r in data) {
            list += "<h1>" + data[r].name + "</h1><p>" + data[r].recipe_instructions + "</p><br>";

        }
        document.getElementById("content").innerHTML = list;
    });
}