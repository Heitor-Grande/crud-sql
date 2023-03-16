//product config
const express = require("express")
const product = express.Router()

//database config
const database = require("../models/database")

//-- start crud
    //read
product.get("/", function(req, res){
    database.all(`select * from product`, function(erro, product){
        res.send(product)
    })
})

    //delete
product.delete("/delete/:id_product", function(req, res){
    let id_product = req.params.id_product

    database.run(`delete from product where id_product  = "${id_product}"`, function(erro){
        if(erro){
            res.send(erro)
        }
        else{
            res.send("produto deletado com sucesso")
        }
    })
})

    //update
product.put("/update/:id_product", function(req, res){
    let id_product = req.params.id_product

    let new_nome = req.body.nome
    let new_description = req.body.description
    let new_preco = req.body.preco

    database.run(`update product set nome = "${new_nome}", description = "${new_description}",
    preco = "${new_preco}" where id_product = "${id_product}"` , function(erro){
        if(erro){
            res.send(erro)
        }
        else{
            res.send("Produto atualizado com sucesso")
        }
    })
})
    //create
product.post("/create/product", function(req, res){
    
    let nome = req.body.nome
    let description = req.body.description
    let preco = req.body.preco

    database.run(`insert into product (nome, description, preco) values("${nome}", "${description}", 
    "${preco}")`, function(erro){
        if(erro){
            res.send(erro)
        }
        else{
            res.send("produdto inserido com sucesso")
        }
    })

})
//-- end crud

module.exports = product