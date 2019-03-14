// window.onload = inicializar;

var bd = firebase.firestore();
var cargador = document.getElementById('bar_Cargador');
var fichero = document.getElementById('fichero');
var ruta;
var file;

fichero.addEventListener('change', function(e){
	
	//Obtener Archivo
	file = e.target.files[0];
	console.log(file);
	ruta = 'archivos/';
	
}, false );


// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();
var dbAlamcenamiento = iniciarApp.storage();

function guardar(){

	$('.toast').toast(data-animation="500");
	// console.log(email);
	// let archivo = document.getElementById('txt_nombreArchivo').value;
	// let codigoArchivo = document.getElementById('txt_codigoArchivo').value;
	// let areaArchivo = document.getElementById('txt_areaArchivo').value;
	// let descripcion = document.getElementById('txt_descripcion').value;
	// let version = document.getElementById('txt_Version').value;
	// let rutaBD = "Documentos";

	// //Subir A la Base De Datos
	// bd.collection(rutaBD).add({
	// 	Nombre: archivo,
	// 	Codigo: codigoArchivo,
	// 	Ministerio: areaArchivo,
	// 	Descripcion: descripcion,
	// 	Version: version,
	// 	Propiedad: displayName
	// 	//Obtencion de los elementos
		
	// })
	// .then(function(docRef){
	// 	console.log("Documento escrito con: ", docRef.id);
	// 	//crear un storageRef
	// 	var storageRef = firebase.storage().ref(ruta + codigoArchivo + " " + archivo);

	// 	//subir Archivo
	// 	var task = storageRef.put(file);

	// 	task.on('state_changed',
	
	// 		function progress(snapshot){
	// 			var porcentage = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
	// 			cargador.value = porcentage;

	// 			if(porcentage == 100){

	// 				document.getElementById('txt_nombreArchivo').value = '';
	// 				document.getElementById('txt_codigoArchivo').value = '';
	// 				document.getElementById('txt_areaArchivo').value = '';
	// 				document.getElementById('txt_descripcion').value = '';
	// 				document.getElementById('txt_Version').value = '';

	// 				console.log("ArchivO UBIDO CORRECTAMENTE");
					

	// 			}


	
	// 		}
	// 	)
	// })
	// .catch(err=>{
	// 	console.error("Error añadiendo el archivo", err)
	// })
}


function afterUpload(porcentage){

	if(porcentage == 100){

	}

}