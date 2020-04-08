const db = require("../database/models");
const Productos = db.productos;

module.exports = {

    index: (req,res) => {
        Productos
        .findAll({
			attributes:{
				exclude:['marca','precio','stock','desc','createdAt','updatedAt']
			}
		})
        .then(productos => {
			return res.status(200).json({
				count: productos.length,
				data: productos         
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
		if (req.body.token != '123') {
			return res.status(505).json({
				msg: 'no fue posible guardar'
			});
		} else {
			Productos
				.create(req.body)
				.then(result => {
					return res.json(result);
				}).catch(error => res.json(error));
		}
	},
	destroy: (req, res) => {
		if (req.body.token != '123') {
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