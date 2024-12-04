const express = require("express");
const app = express();

const userModel = require('./usermodel');

app.get("/" , (req,res)=>{
    res.send("hey");
});
app.get("/create" , async (req,res)=>{
    let usercreated = await userModel.create({
        name:"aa",
        username:"vaaa",
        email:"a@b.com"
    })
    res.send(usercreated);
});
app.get("/update",async(req,res)=>{
    let updated = await userModel.findOneAndUpdate({name:"aa"},{name:"zz"},{new:true});
    res.send(updated);
})
app.get("/read",async(req,res)=>{
    let read = await userModel.find();
    res.send(read);
})
app.get("/delete",async(req,res)=>{
    let deleted = await userModel.findOneAndDelete({name:"zz"});
    res.send(deleted);
})
app.listen(3000);