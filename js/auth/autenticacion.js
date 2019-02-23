class Autenticacion{

	crearCuantaEmailPass(email, password, nombres){
		firebase.auth().createUserWithEmailAndPassword(email, password)
			.then(result=>{

				result.user.updateProfile({
					displayName: nombres
				})

			})

	}
}