function getInformation() {
    alert("woohoo you did step 2");
    console.log("Getting diet information");
    
    //updating the DOM
    var info = $("#dietFacts").val();
    console.log("Info" +info);
    
    //getting info from server.js
    $.get("/dietInformation", function(data) {
        console.log("Back from the server with:");
        console.log(data);
        
        let list = "";
        for(info in data) {
            list += "<h1>" + data[info].topics + "</h1>";
        }
        document.getElementById("content").innerHTML = list;
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

function getIngredients() {
    alert("getIngredients() function works");
    $.get("/ingredients", function(data) {
        alert(data);
        
    let list = "";
    list += "<h1>List of Ingredients</h1><br><p>";
    for(i in data) {
        list += data[i].ingredients + " " + data[i].quantity + " " + data[i].calories + " " + data[i].foodgroup + "</p><br>";
    }
        list += "<button id='addMoreIngredients' onclick='postIngredients()' name='Add More Items'>"
        document.getElementById("content").innerHTML = list;
    });
}

//function getIngredients() {
//    //var r = $("#recipes").val();
//    
//    $.get("/ingredients", function(data) {
//     alert(data);
//        let list = "";
//        for(i in data) {
//            list += "<p>" + data[i].ingredients + " " + data[i].quantity + " " + data[i].calories + " " + data[i].foodgroup + " </p><br>";
//        }
//        //list += inputs & button w/onclick to postIngredients()
//        
//        document.getElementById("content").innerHTML = list;
//    });
//}

function postIngredients() {
    alert("postIngredients function was called");
    
    let add = "";
    add += "<input type='text'>Ingredient';
    
   
}



    
        
       
