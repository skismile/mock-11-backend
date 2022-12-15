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

module.exports=app
