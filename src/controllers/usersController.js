const db = require("../database/models");
const Usuarios = db.usuarios;

module.exports = {

    index: (req,res) => {
        Usuarios
        .findAll({
			attributes:{
				exclude: [ 'password', 'repassword', 'avatar' , 'createdAt', 'updatedAt']
			}
		})
        .then(usuarios => {
            return res.json({
				count: usuarios.length,
				data: usuarios,
			});
        })
        .catch(error =>{
            return res.json(error);            
        })
   
    },
    show: (req, res) => {
		Usuarios
			.findByPk(req.params.id,{
				attributes:{
					exclude: [ 'password', 'repassword']
				}})
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
				msg: 'Los datos no pudieron guardarse'
			});
		} else {
			Usuarios
				.findAll()
				.then( usuarios =>{
					ultimo = usuarios.pop();
					req.body.detail = 'http://localhost:3000/users/' + (ultimo.id+1);
					console.log(req.body.detail);	
			Usuarios
				.create(req.body)
				.then(result => {
						return res.json(result);
				}).catch(error => res.json(error));	})		
		 }
	},
	destroy: (req, res) => {
		if (req.query.token != '123') {
			return res.status(505).json({
				msg: 'Los datos no pudieron borrarse'
			});
		} else {
			Usuarios
				.destroy({
					where: { id: req.params.id }
				})
				.then(result => {
					return res.json(result);
				}).catch(error => res.json(error));
		}
		

}


}