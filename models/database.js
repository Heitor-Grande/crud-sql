const sqlite3 = require("sqlite3")
const database = new sqlite3.Database("./models/base.db", function(){
    console.log("Banco criado/conectado com sucesso")
})

module.exports = database