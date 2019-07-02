const path = require("path");


module.exports = function(app) {

    app.get('/', (req, res) => {
        // console.log(path)
        // console.log(__dirname)
        res.sendFile(path.join(__dirname, "../public/home.html"));
     });
     app.get('/survey', (req, res) => {
         res.sendFile(path.join(__dirname, "../public/survey.html"));
     });
     
};

