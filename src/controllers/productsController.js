const db = require("../database/models");
const Productos = db.productos;
const Tipos = db.tipos;

module.exports = {

    index: (req,res) => {
        Productos
        .findAll(
			{
		    include: ['tipo'],
			attributes:{
				exclude:['marca','precio','stock','desc','createdAt','updatedAt']
			}
		})
        .then(productos => {
			Tipos
			.findAll()
			.then( tipos => {
				return res.status(200).json({
					count: productos.length,
					tipos: tipos,
					data: productos,
				})
			
			})   
        })
        .catch(error =>{
            return res.json(error);            
        })

    },
    show: (req, res) => {
		Productos
			.findByPk(req.params.id)
			.then(result => {
				if(result) {
					return res.json(result);
				}
				return res.status(404).json({
					status: res.statusCode,
					method: req.method
				});
			}).catch(error => res.json(error));
	},
	store: (req, res) => {
		if (req.query.token != '123') {
			return res.status(505).json({
				msg: 'no fue posible guardar'
			});
		} else {
			
			Productos
				.findAll()
				.then( productos =>{
					ultimo = productos.pop();
					req.body.detail = 'http://localhost:3000/products/' + (ultimo.id+1);
					console.log(req.body.detail);				
			Productos	
				.create(req.body)
				.then(result => {
					return res.json(result);
				}).catch(error => res.json(error));
			})		
		}
	},
	destroy: (req, res) => {
		if (req.query.token != '123') {
			return res.status(505).json({
				msg: 'no fue posible borrar'
			});
		} else {
			Productos
				.destroy({
					where: { id: req.params.id }
				})
				.then(result => {
					return res.json(result);
				}).catch(error => res.json(error));
		}
		

	},
	showImg: (req,res) =>{
		return res.render(req.params.img);
	}
}