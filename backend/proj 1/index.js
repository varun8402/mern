const express = require('express');
const app = express();
const path = require("path");
const fs = require('fs');
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname , "public")));
app.get("/",function(req,res){
    fs.readdir(`./files`, function(err,files){
        res.render("index",{files:files});
    });
})
app.get("/files/:textfile",function(req,res){
    fs.readFile(`./files/${req.params.textfile}`,"utf-8",function(err,content){
        res.render("file",{content:content,filename:req.params.textfile});
    });
})
app.post("/create",function(req,res){
   fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt` , req.body.details ,function(err){
    res.redirect("/");
   });
})
app.get("/delete/:textfile",function(req,res){
    fs.rm(`./files/${req.params.textfile}`,function(err){
        if(err){
            console.error(err.message);
        }
        console.log("File deleted");
        res.redirect('/');
    })
})
app.get("/edit/:textfile",function(req,res){
    res.render('edit',{value:req.params.textfile});
})
app.post('/edit',function(req,res){
    fs.rename(`./files/${req.body.previous}`,`./files/${req.body.new}` ,function(err){
        res.redirect('/');
    })
})
app.listen(3000);