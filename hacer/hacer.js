const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
	let data = JSON.stringify(listadoPorHacer);
	fs.writeFile('./db/data.json',data, err => {
		if (err) throw new Error('No se pudo grabar',err);
	});
}

const cargarDB = () => {
	try {
		listadoPorHacer = require('../db/data.json');
	} catch(e) {
		listadoPorHacer = [];
	}
}

const crear = (descripcion) => {
	
	cargarDB();

	let porHacer = {
		descripcion,
		completado : false
	};	

	listadoPorHacer.push(porHacer);

	guardarDB();

	return porHacer;
}

const listar = () => {
	cargarDB();
	return listadoPorHacer;
}

const actualizar = (descripcion,completado) => {

	cargarDB();
	let index = listadoPorHacer.findIndex( tarea => {
		return tarea.descripcion === descripcion;
	});

	//console.log(index);

	if(index >= 0){
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	}else{
		return false;
	}
	
	/*for(let listado of listadoPorHacer){
		if(listado.descripcion == descripcion){
			listado.completado = completado;
			guardarDB();
		}
	}*/
}

const eliminar = (descripcion) => {
	cargarDB();
	let index = listadoPorHacer.findIndex(tarea => {
		return tarea.descripcion === descripcion;
	});
	if(index>=0){
		listadoPorHacer.splice(index,1);
		guardarDB();
		return true;
	}else{
		return false;
	}
}

const buscar = (parametro) => {
	cargarDB();
	let encontrados = [];
	for(let lista of listadoPorHacer){
		if(lista.completado == parametro){
			encontrados.push(lista);
		}
	}
	return encontrados;
}

module.exports = {
	crear,
	listar,
	actualizar,
	eliminar,
	buscar
}