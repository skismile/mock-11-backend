const express = require("express");
const app = express.Router();
const ProductModel = require("../Model/Product.Model");

app.get("/", async (req, res) => {

try{

let products=await ProductModel.find()
return res.send(products)

}catch(e){

return res.send(e)

}



});

// {
  
//   "Title":"mobile",
//   "Quantity":2,
//   "Priority":1,
//   "Description":"good"
  
// }


app.post("/create", async (req, res) => {
  // console.log("signup")
  const { Title,Quantity,Priority,Description } = req.body;

 console.log(req.body)
      try {
        const product = new ProductModel({
         Title,Quantity,Priority,Description
        });
        await product.save();

        return res.send("Product created successfully");
      } catch (err) {
        console.log(err);
        return res.status(401).send(err);
      }
    
 
});

app.post("/delete", async (req, res) =>{

let {id}=req.body
try{

  let product= await ProductModel.findByIdAndDelete(id)
  console.log(product)
  res.send(id)
}catch(e){
  res.send(e)
}
})

module.exports = app;
