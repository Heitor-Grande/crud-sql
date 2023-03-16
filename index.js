//express config
const express = require("express")
const app = express()

//body-parser config
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))

//server door
const door = process.env.PORT || 8080
app.listen(door, function(){
    console.log("SERVER DOOR: " + door)
})

//database config
const database = require("./models/database")

//urls product
const product = require("./controllers/product")
    
    //read
app.get("/", product)

    //delete
app.delete("/delete/:id_product", product)

    //update
app.put("/update/:id_product", product)
app.patch("/updatePreco/:id_product", product)

    //create
app.post("/create/product", product)
