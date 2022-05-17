const express = require("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser")
const cors = require ("cors")
const dotenv = require("dotenv")
const app = express();
require("dotenv").config()

const PORT = process.env.PORT || 3000;
 app.use(cors());
 app.use(bodyParser.json())

//  const URL = process.env.MONGODB_URL;
const URL ="mongodb+srv://sliituser:sliituser@wishlist.btsu8.mongodb.net/wishlistDB?retryWrites=true&w=majority;"

 app.get('/',(req,res)=>{
     res.send("cheeeeeck")
 })
 mongoose.connect(URL)

 const connection = mongoose.connection;
 connection.once("open",()=>{
     console.log("Mongo DB connected successfully")
     
 })

const wishlistRouter = require("./routes/wishlistRoutes.js")
app.use("/wishlist",wishlistRouter)


app.listen(PORT,()=>{
     console.log(`server run on port number :${PORT}`)
 })