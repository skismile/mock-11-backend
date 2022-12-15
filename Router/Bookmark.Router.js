const express = require("express");
const app = express.Router();
const BooknarkModel = require("../Model/Bookmark.Model");

app.get("/", async (req, res) => {

    // res.send("bookmark")

try{

let bookmark=await BooknarkModel.find()
return res.send(bookmark)

}catch(e){

return res.send(e)

}
})

app.post("/", async (req, res) => {

    let data=req.body

    

try{

let bookmark=await BooknarkModel.create(data)
return res.send(bookmark)

}catch(e){
 
return res.send(e)

}
})



module.exports=app
