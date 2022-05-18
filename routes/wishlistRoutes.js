const router = require("express").Router();
let WishListItem = require("../models/wishlistItemsModel")

// ADD -----
router.route("/add").post((req,res)=>{
    const name = req.body.name
    const price = req.body.price
   // const stockAvailable = Number(req.body.brandName)
    const description = req.body.description

    const newWishItem = new WishListItem({
        name,price,description
    })

    newWishItem.save().then(()=>{
        //res.json(newWishItem)
        res.json("Item added")
    }).catch((err)=>{
        console.log(err)
    })
})

//get all----
router.route("/getAll").get((req,res)=>{
    WishListItem.find().then((products)=>{
        res.json(products)
    }).catch((error)=>{
        console.log(error)
    })
})

router.route("/update/:id").put(async(req,res) =>{
    let userId = req.body.id;
    const {name,price,description} = req.body;

    const updateProduct = {
        name,
        price,
        description,
      
    }

    const update = await WishListItem.findByIdAndUpdate(userId,updateProduct)
    .then(() => {
        res.status(200).send({status: "Product Updated",user: update})
    }).catch((error)=>{
    res.status(500).send({status: "Error with update"})
    })
})
router.route("/delete/:id").delete(async (req,res) => {
    let userId = req.params.id;
    console.log("userID---",userId)
    await WishListItem.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status: "Product Deleted"})
    }).catch((error)=>{
        res.status(500).send({status: error.message})
    })
})


router.route("/get/:id").get(async(req,res)=>{
    let userId = req.params.id;
    console.log(userId)
    await WishListItem.findById(userId).then((fitem)=>{
        res.status(200).send({status:"Item fetched",fitem})
        //console.log("success")
    }).catch((err)=>{
        res.status(500).send({status:"Item fetching failed", error: err.message})
        console.log(err.message)
    })
})
module.exports= router