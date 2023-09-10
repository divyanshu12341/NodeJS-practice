const express = require("express");
const app = express();
const path = require("path");
const PORT = 3000;
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname,'public')));
app.use('/',require(path.join(__dirname,'routes/blog.js')));
app.listen(PORT,()=>{
    console.log("APP is listening at port",3000);
})




