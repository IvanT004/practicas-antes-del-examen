function enviar(){

    var contrasena = document.getElementById("password1").value;
    var contrasena2 = document.getElementById("password2").value;
    var email =  document.getElementById("email").value;
    // if(contrasena==contrasena2){

    //     var ExpRegPassFuerte=/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;        
       
    
    //     if(contrasena.match(ExpRegPassFuerte)!=null)
    //     alert("Contraseña Fuerte Válida");
     
    //     if(contrasena2.match(ExpRegPassFuerte)==null)
    //         alert("Contraseña Fuerte Invalida");
        
    // }else{
    //     alert("Las contraseñas no coinciden");
    // }

    var today = new Date();
    var YearActual = today.getFullYear();
    var obtenido = document.getElementById("fecha").value;
    var YearNacimiento = obtenido.substring(0, 4)
    var edad = YearActual - YearNacimiento;
    
    if(edad>=18 && document.getElementById("guardar").checked){
        alert("Para registrarte debes ser mayor de edad");
    }

    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
	if( !email.match(validEmail) ){
        alert("El email no es valido");
	}

       
}

