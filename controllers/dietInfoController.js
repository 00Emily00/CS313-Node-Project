function getdietInformation(req, res) {
    console.log("Getting the information");
    
     var results = {
        recipes: [
            {id: 1, rule: "It is important to always drink water"}
            ]
    }
     
    res.json(results);
}

module.exports = {
    getDietInformation: getdietInformation
}

//handling user request
//send things to the model
//eventually send stuff to the client
