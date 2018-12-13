function getInformation() {
    alert("woohoo you did step 2");
   // console.log("Getting diet information");
    
    //updating the DOM
    var info = $("#dietFacts").val();
   // console.log("Info" +info);
    
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
  //      alert(data);
        
    let list = "";
    list += "<h1>List of Ingredients</h1><br><p>";
    for(i in data) {
        list += data[i].ingredients + " " + data[i].quantity + " " + data[i].calories + " " + data[i].foodgroup + "</p><br>";
    }
        list += "<button id='addMoreIngredients' onclick='userInput()' name='Add More Items'>Add More Items</button>"
        document.getElementById("content").innerHTML = list;
    });
}

function userInput() {
  //  alert("userInput function was called");
    
    let add = "";
    add += "Ingredient<input type='text' name='ingredient' id='ingredient'> Quantity<input type='text' id='quantity'>Calories<input type='text' id='calories'>Food Group<input type='text' id='foodgroup'><button type='button' onclick='createObject()'>Add Item</button>";
    
    document.getElementById("content2").innerHTML = add;
    
    
    
    //json object send to server,
    
}

//creating json object
function createObject() {
    
   var ingredient = $("#ingredient").val();
    var quantity = $("#quantity").val();
    var calories = $("#calories").val();
    var foodgroup = $("#foodgroup").val();
    
    var submitInput = {
        ingredient : ingredient,
        quantity : quantity,
        calories : calories,
        foodgroup : foodgroup
    }
    
    $.post("/ingredients", submitInput, function(data) {
       // console.log("ingredient add inside creatObject()");
       // console.log(data);
        //clear out text boxes and update list
    });
    
    console.log(submitInput);
}

function postIngredients() {
     alert("postIngredients function was called");
    
}



    
        
       
