const db = require("../database/models");
const Productos = db.productos;

module.exports = {

    index: (req,res) => {
        Productos
        .findAll()
        .then(productos => {
            return res.json(productos);
        })
        .catch(error =>{
            return res.json(error);            
        })

    }

}