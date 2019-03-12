
var displayName = "";
var email = "";
var emailVerified = "";
var photoURL = "";
var isAnonymous = "";
var providerData = "";

var iniciarApp=firebase.initializeApp(config);

firebase.auth().onAuthStateChanged((user)=>{
	if (user) {
		// User is signed in.
		displayName = user.displayName;
		email = user.email;
		emailVerified = user.emailVerified;
		photoURL = user.photoURL;
		isAnonymous = user.isAnonymous;
		uid = user.uid;
		providerData = user.providerData;
		
		// ...
	} else {
		console.log("Usuario no conocido")
	}
});





