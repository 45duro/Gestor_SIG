$(()=>{

	firebase.initializeApp(config);

	firebase.auth().onAuthStateChanged(user => {
	    if(user){
	      $('#btnInicioSesion').text('Salir')
	      if(user.photoURL){
	        $('#avatar').attr('src', user.photoURL)
	      }else{
	        $('#avatar').attr('src', 'imagenes/usuario_auth.png')
	      }
	    }else{
	      $('#btnInicioSesion').text('Iniciar Sesión')
	      $('#avatar').attr('src', 'imagenes/usuario.png')
	    }
	  })



})