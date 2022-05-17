const router = require("express").Router();
let WishListItem = require("../models/wishlistItemsModel")

router.route("/add").post((req,res)=>{
    const name = req.body.name
    const price = req.body.price
    const stockAvailable = Number(req.body.brandName)
    const description = req.body.description

    const newWishItem = new WishListItem({
        name,price,description,stockAvailable
    })

    newWishItem.save().then(()=>{
        res.json("Item added to wish list")
    }).catch((err)=>{
        console.log(err)
    })
})

module.exports= router