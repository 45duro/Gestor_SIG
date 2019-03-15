
// opciones de toastr
toastr.options = {
	"closeButton": true,
	"progressBar": true,
	"positionClass": "toast-top-right",
	"showDuration": "300",
	"hideDuration": "2000",
	"timeOut": "7000",
	"extendedTimeOut": "1000"
  }



function isVacio(elemento){

	if (elemento==0){
		return true;
	}
	else{
		return false;
	}

}






var bd = firebase.firestore();
var cargador = document.getElementById('bar_Cargador');
var fichero = document.getElementById('fichero');
var ruta;
var file;
$('#toas_Correcto').toast({ delay: 8000 });
$('#toas_inCorrecto').toast({ delay: 8000 });

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
		
	//Carga de variables esenciales
	console.log(email);
	let archivo = document.getElementById('txt_nombreArchivo').value;
	let codigoArchivo = document.getElementById('txt_codigoArchivo').value;
	let areaArchivo = document.getElementById('txt_areaArchivo').value;
	let descripcion = document.getElementById('txt_descripcion').value;
	let version = document.getElementById('txt_Version').value;
	let rutaBD = "Documentos";

	//Determinar errores o vacios
	if(isVacio(archivo) || isVacio(codigoArchivo) || isVacio(areaArchivo) || isVacio(archivo) || isVacio(version) || isVacio(fichero)){

		console.log("Todos los campos deben estar diligenciados")

	}
	else{
		
		console.log("Estoy en else");
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
			
		// 	// // console.log("Documento escrito con: ", docRef.id);
		// 	//crear un storageRef
		// 	var storageRef = firebase.storage().ref(ruta + codigoArchivo + " " + archivo);
	
		// 	//subir Archivo
		// 	let task = storageRef.put(file);
	
		// 	task.on('state_changed',
		
		// 		function progress(snapshot){
		// 			let porcentage = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
		// 			cargador.value = porcentage;
	
		// 			if(porcentage == 100){
						
		// 				toastr.success(`El Documento ${archivo} esta en la nube correctamente`, '¡Excelente!');
	
		// 				// document.getElementById('txt_nombreArchivo').value = '';
		// 				// document.getElementById('txt_codigoArchivo').value = '';
		// 				// document.getElementById('txt_areaArchivo').value = '';
		// 				// document.getElementById('txt_descripcion').value = '';
		// 				// document.getElementById('txt_Version').value = '';
		// 				// document.getElementById('fichero').value = '';
		// 				archivo.value = "";
		// 				codigoArchivo.value = "";
		// 				areaArchivo.value = "";
		// 				descripcion.value = "";
		// 				version.value = "";
		// 				fichero.value = "";
		// 				cargador.value = 0;
		// 				console.log("Archivo subido correctamente");
						
	
		// 			}
	
	
		
		// 		}
		// 	)
		// })
		// .catch(err=>{
		// 	toastr.error(`El Documento ${archivo} no se ha podido colocar en la nube`, '¡OH!');
		// 	console.error("Error añadiendo el archivo: ", err.name)
			
		// })
	}

}


