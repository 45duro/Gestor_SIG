class Autenticacion{

	crearCuantaEmailPass(email, password, nombres){
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(result=>{

				result.user.updateProfile({
					displayName: nombres
				})

			})
	}

	authCuentaGoogle(){
		const provider = new firebase.auth.GoogleAuthProvider()

		firebase.auth().signInWithPopup(provider).then(result => {
			console.log(`Bienvenido ${result.user.displayName} !! `)
			var ruta = "http://localhost/gestor_sig/welcome/welcome.html";
			window.location.href = ruta;
		})
		.catch(error => {
			console.error(error)
		})




	}
}