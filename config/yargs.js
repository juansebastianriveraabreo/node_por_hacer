const descripcion = {
	demand: true,
	alias: 'd',
	desc:'Descripcion al crear un elemento'
}

const completado = {
	alias:'c',
	default:true,
	desc:'Marca como completado la tarea'
}

const buscar = {
	alias : 'b',
	desc : 'Realiza una busqueda'
}

const argv = require('yargs')
		.command('crear','Crear un elemento',{
			descripcion
		})
		.command('actualizar','Actualizar un elemento',{
			descripcion,
			completado
		})
		.command('borrar','Elimina una tarea',{
			descripcion
		})
		.command('listar','Listar todas las tareas',{
			buscar
		})
		.help()
		.argv;

module.exports = {
	argv
}

