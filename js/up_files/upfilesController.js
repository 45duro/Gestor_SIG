
//Obtencion de los elementos

var cargador = document.getElementById('bar_Cargador');
var fileButton = document.getElementById('btn_Archivo');

var iniciarApp=firebase.initializeApp(config);

// Get a reference to the storage service, which is used to create references in your storage bucket
var storage = firebase.storage();

var dbAlamcenamiento = iniciarApp.storage();


//Vigilar la Seleccion de archivos
fileButton.addEventListener('change', function(e){
	
	//Obtener Archivo
	var file = e.target.files[0];
	console.log(file);

	//crear un storageRef
	var storageRef = firebase.storage().ref('archivos/' + file.name);

	//subir Archivo
	var task = storageRef.put(file);

	//Actualizar barra de progreso

	task.on('state_changed',

		function progress(snapshot){
			var porcentage = (snapshot.bytesTransferred/snapshot.totalBytes) * 100
			cargador.value = porcentage

		}
	)

	
}, false );
