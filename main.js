let userEmail = prompt("Ingrese su correo: ");
let password = parseInt(prompt("Ingrese su contraseña: "));
let confirmPassword = parseInt(prompt("Confirme su contraseña: "));

while (password != "" && confirmPassword != ""){
    if (password == confirmPassword){
        alert("Usuario Registrado con Exito!");
        break;
    }else{
        alert("Las contraseñas deben ser iguales");

        password = prompt("Ingrese su contraseña: ");
        confirmPassword = prompt("Confirme su contraseña: ");
        
    }
}

