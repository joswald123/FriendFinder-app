const express = require("express");
const app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routing/apiRoutes")(app);
require("./routing/htmlRoute")(app);


app.listen(PORT,  () => {
    console.log("Server is listening " + PORT);
})