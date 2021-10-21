const string =document.getElementById("#in_nombre_usuario");
const stringA =document.getElementById("#in_contrasena");
const stringB =document.getElementById("#in_confirmar_contrasena");
const boton_registro =document.getElementById("#btn_registrar_usuario");

const patronNombre = /^[a-zA-Z]{6,30}$/g;
const patronContrasena = /^[A-Z0-9]{6,}$/g;

let registros =[];

boton_registro.addEventListener("click", agregarRegistro());

class MiConstructor{
    constructor(){
        this.usuario=string.value;
        this.contrasena=stringA.value;
        this.confirmacion=stringB.value;
    }
}

function agregarRegistro(){
    let usuarioCreado=new MiConstructor();
    if(patronNombre.test(usuarioCreado.usuario)==true){
        if(patronContrasena.test(usuarioCreado.contrasena)==true){
            if(patronContrasena.test(usuarioCreado.confirmacion)==true){
                if(usuarioCreado.contrasena===usuarioCreado.confirmacion){
                    console.log("Se registro el usuario");
                }else{console.log("La confirmacion no coincide con la contraseña");
                }
            }else{console.log("La confirmación no es apta");
            }
        }else{console.log("La contraseña no es apta");
        }
    }else{console.log("El usuario no es apto");
    }
}
/*
function OrdenarArreglo(arreglo){}

module.exports.validar_nombre_usuario = validar_nombre_usuario;
module.exports.validar_contrasena=validar_contrasena;
module.exports.confirmar_contrasena=confirmar_contrasena;

module.exports.registros = registros;
module.exports.OrdenarArreglo=OrdenarArreglo;
module.exports.agregarRegistro=agregarRegistro;
*/