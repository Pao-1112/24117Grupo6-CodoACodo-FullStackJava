
function loguin(){
	let user=document.getElementById("user").value;
	let password=document.getElementById("password").value;
	if (user=="usuario" & password=="12345"){
        window.location="files.html";
	}
	//if(){
		//window.location="files.html";
	//}
	else{
		
		alert("¡Usuario y/o Password incorrecto!, utiliza user= usuario y password=12345");
		
	}
	
}
function register(){
	window.location="register.html";
}