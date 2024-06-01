
function loguin(){
	let user=document.getElementById("user").value;
	let password=document.getElementById("password").value;
	if (user=="" & password==""){
        window.location="files.html";
	}
	else{
		window.location="files.html";
		//alert("¡Usuario y/o Password incorrecto!")
	}
	
}
function register(){
	window.location="register.html";
}