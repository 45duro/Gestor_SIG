$(()=>{

	console.log("hola")
	
	const objAutenticador = new Autenticacion()

	$('#btn_loginGoogle').click(()=>{

		objAutenticador.authCuentaGoogle()

	});
	
});