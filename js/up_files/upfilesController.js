
var bd = firebase.firestore();


function guardar(){
	console.log(email);
	let archivo = document.getElementById('txt_nombreArchivo').value;
	let codigoArchivo = document.getElementById('txt_codigoArchivo').value;
	let areaArchivo = document.getElementById('txt_areaArchivo').value;
	let descripcion = document.getElementById('txt_descripcion').value;
	let version = document.getElementById('txt_Version').value;
	let ruta = "Documentos";

	//Subir A la Base De Datos
	bd.collection(ruta).add({
		Nombre: archivo,
		Codigo: codigoArchivo,
		Ministerio: areaArchivo,
		Descripcion: descripcion,
		Version: version,
		Propiedad: displayName
		//Obtencion de los elementos
		
	})
	.then(function(docRef){
		console.log("Documento escrito con: ", docRef.id);
	})
	.catch(err=>{
		console.error("Error añadiendo el archivo", err)
	})
}


function inicializar(){

	var cargador = document.getElementById('bar_Cargador');
	var fichero = document.getElementById('fichero');
	// Get a reference to the storage service, which is used to create references in your storage bucket
	fichero.addEventListener('change', subirElArchivo(), false);

	storageRef = firebase.storage().ref();
}





function subirElArchivo(){

	console.log("Subir archivo");

}
// function guardar(){
// 	console.log(email)
// 	let archivo = document.getElementById('txt_nombreArchivo').value;
// 	let codigoArchivo = document.getElementById('txt_codigoArchivo').value;
// 	let areaArchivo = document.getElementById('txt_areaArchivo').value;
// 	let descripcion = document.getElementById('txt_descripcion').value;
// 	let version = document.getElementById('txt_Version').value;
// 	let ruta = "Documentos";
// 	// // agregar documentos
// 	// var cargador = document.getElementById('bar_Cargador');
// 	// var fileButton = document.getElementById('btn_Archivo');
	
// 	// // Get a reference to the storage service, which is used to create references in your storage bucket
// 	// var storage = firebase.storage();
	
// 	// var dbAlamcenamiento = iniciarApp.storage();
	
	
// 	// //Vigilar la Seleccion de archivos
// 	// fileButton.addEventListener('change', function(e){
		
// 	// 	//Obtener Archivo
// 	// 	var file = e.target.files[0];
// 	// 	console.log(file);
	
// 	// 	//crear un storageRef
// 	// 	var storageRef = firebase.storage().ref('archivos/' + codigoArchivo);
	
// 	// 	//subir Archivo
// 	// 	var task = storageRef.put(file);
	
// 	// 	//Actualizar barra de progreso
	
// 	// 	task.on('state_changed',
	
// 	// 		function progress(snapshot){
// 	// 			var porcentage = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
// 	// 			cargador.value = porcentage
	
// 	// 		}
// 	// 	)
	
		
// 	// }, false );

// 	//Subir A la Base De Datos
// 	bd.collection(ruta).add({
// 		Nombre: archivo,
// 		Codigo: codigoArchivo,
// 		Ministerio: areaArchivo,
// 		Descripcion: descripcion,
// 		Version: version,
// 		Propiedad: displayName
// 		//Obtencion de los elementos
		
// 	})
// 	.then(function(docRef){
// 		console.log("Documento escrito con: ", docRef.id);
// 	})
// 	.catch(err=>{
// 		console.error("Error añadiendo el archivo", err)
// 	})
// }



