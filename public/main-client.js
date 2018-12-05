function getInformation() {
    alert("woohoo you did step 2");
    console.log("Getting diet information");
    
    //updating the DOM
    var info = $("#dietFacts").val();
    console.log("Info" +info);
    
    $.get("/information", function(data) {
        console.log("Back from the server with:");
        console.log(data);
    })
}