function validar_nombre_usuario(string){
    // La ñ arroja falso no esta incluida
    patron2 = /^[a-zA-Z]{6,30}$/g;
    if(patron2.test(string)){
        return true;
     }
     else{
        return false; 
     }
}

function validar_contrasena (string){
    // 6, minmo 6 sin maximo

    patron1 = /^[A-Z0-9]{6,}$/g;
 

        if(patron1.test(string)){
           return true;
        }
        else{
           return false; 
        }
        
    } 

function confirmar_contrasena(stringA, stringB){
 if(validar_contrasena(stringA))
    {
        if(validar_contrasena(stringB))
        {
            if(stringA===stringB)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }

    else{
        return false;
    }
}

const stringprueba="AAAAA2";
const stringprueba2="12345";

const comprobarpassword = validar_contrasena (stringprueba);

console.log (comprobarpassword);


// module.exports.validar_nombre_usuario = validar_nombre_usuario;
// module.exports.validar_contrasena = validar_contrasena;
// module.exports.confirmar_contrasena = confirmar_contrasena;