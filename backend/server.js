const express = require("express");
const mongoose = require ("mongoose");
const bodyParser = require("body-parser")
const cors = require ("cors")
const dotenv = require("dotenv")
const app = express();
require("dotenv").config()

const PORT = process.env.PORT || 8082;
 app.use(cors());
 app.use(bodyParser.json())

 const URL = process.env.MONGODB_URL;

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