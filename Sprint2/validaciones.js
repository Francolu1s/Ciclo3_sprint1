/*var string = 'Hola'*/

function validar_nombre_usuario(string){
    if(string.length>=6 & string.length<=30){
        return true;
    }
    else{
        return false;
    }
}

function validar_contrasena(string){
    if(string.length>=6){
        return true;
    }
    else{
        return false;
    }
}

function confirmar_contrasena(stringA, stringB){
    if(stringB.length>=6){
        if(stringA=stringB){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        return false;
    }
}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena;