//Obtencion de los elementos
var cargador = document.getElementById('bar_Cargador');
var fileButton = document.getElementById('btn_Archivo');

console.log(cargador);

//Vigilar la Seleccion de archivos
fileButton.addEventListener('change', function(e){
	//Obtener Archivo
	var file = e.target.files[0];

	// Crear un Storage o ruta de almacenamiento
	var storageRef = firebase.storage().ref('mis_fotos/' + file.name);

	//Subir Archivo
	var tarea = storageRef.put(file);


	//Vigilar el proceso de carga

	tarea.on('state_changed', 
		function progreso(snapshot){
			let porcentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
			cargador.value = porcentage;
		}, 
		function error(err){
			//Mostrar error
			console.log(err);

		}, 
		function complete(){

			console.log("Archivo subido satisfactoriamente");

		})
} )