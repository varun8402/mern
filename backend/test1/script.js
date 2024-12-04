const express = require('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname,"public")))
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render("index");
})
app.post('/contacts',function(req,res){
    
})
app.get()
app.listen(3000);