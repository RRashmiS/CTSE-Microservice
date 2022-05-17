const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const wishlistSchema = new Schema({
    name:{
        type:String
    },
    price:{
        type:String
    },
    description:{
        type:String
    },
    stockAvailable:{
        type:Number
    }
})

const WishList = mongoose.model("wishlists",wishlistSchema)
module.exports = WishList;