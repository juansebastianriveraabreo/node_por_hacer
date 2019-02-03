const argv = require('./config/yargs').argv;
const por_hacer = require('./hacer/hacer');
const colors = require('colors');
//console.log(argv);
	
let comando = argv._[0];

switch(comando){
	case 'crear':
		let tarea = por_hacer.crear(argv.descripcion);
		console.log(tarea);
		break;
	case 'listar':
		if(argv.buscar != undefined){
			console.log("entro",argv.buscar);
			let tareas = por_hacer.buscar(argv.buscar);
			for(let tarea of tareas){
				console.log("=========POR HACER=========".green);
				console.log("TAREA: ",tarea.descripcion);
				console.log("ESTADO: ",tarea.completado);
				console.log("===========================".green);
			}
		}else{
			let tareas = por_hacer.listar();
			for(let tarea of tareas){
				console.log("=========POR HACER=========".green);
				console.log("TAREA: ",tarea.descripcion);
				console.log("ESTADO: ",tarea.completado);
				console.log("===========================".green);
			}	
		}
		break;
	case 'actualizar':
		let actualizar = por_hacer.actualizar(argv.descripcion,argv.completado);
		console.log(actualizar);
		break;
	case 'borrar':
		let eliminar = por_hacer.eliminar(argv.descripcion);
		console.log(eliminar);
		break;
	default:
		console.log('Comando no reconocido');
		break;
}
//const color = require()