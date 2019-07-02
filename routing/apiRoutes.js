const friends = require("../app/data/friends");

module.exports = function(app){

    app.get("/api/friends", (req, res) =>{
        res.json(friends)
    });
    

    //  handle the compatibility logic


    app.post("/api/friends", (req, res) =>{
        // console.log('quiz submmited')
        // console.log(req.body)
        let scores = req.body.scores
        const bestMatch ={
            name: "",
            photo: "",
            differences: 1000
        };
    
        let differences =0;
        
        for(let i=0; i<friends.length; i++){
            differences = 0;
            const friend = friends[i];
            for(let j=0; j<friend.scores.length; j++){
                // console.log(scores[j], friend.scores[j])
                // console.log(Math.abs(scores[j] - friend.scores[j]))
                differences = differences + Math.abs(scores[j] - friend.scores[j])
    
            }
            if(differences < bestMatch.differences){
                bestMatch.name = friend.name;
                bestMatch.photo = friend.photo;
                bestMatch.differences = differences;
            }
        } 
        res.json(bestMatch);
    });

};
