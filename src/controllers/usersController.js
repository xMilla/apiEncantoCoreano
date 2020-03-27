const db = require("../database/models");
const usuarios = db.usuarios;

module.exports = {

    index: (req,res) => {
        usuarios
        .findAll()
        .then(usuarios => {
            return res.json(usuarios);
        })
        .catch(error =>{
            return res.json(error);            
        })

   
    },
    show: (req, res) => {
		usuarios
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
				msg: 'Los datos no pudieron guardarse'
			});
		} else {
			usuarios
				.create(req.body)
				.then(result => {
					return res.json(result);
				}).catch(error => res.json(error));
		}
	},
	destroy: (req, res) => {
		if (req.body.token != '123') {
			return res.status(505).json({
				msg: 'Los datos no pudieron borrarse'
			});
		} else {
			usuarios
				.destroy({
					where: { id: req.params.id }
				})
				.then(result => {
					return res.json(result);
				}).catch(error => res.json(error));
		}
		

}


}