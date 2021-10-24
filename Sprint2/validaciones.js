const string =document.querySelector("#in_nombre_usuario");
const stringA =document.querySelector("#in_contrasena");
const stringB =document.querySelector("#in_confirmar_contrasena");
const boton_registro =document.querySelector("#btn_registrar_usuario");
const espacioMensaje=document.querySelector(".mensaje_error")

const patronNombre = /^[a-zA-Z]{6,30}$/g;
const patronContrasena = /^[A-Z0-9]{6,}$/g;

let registros =[];

//if(boton_registro!=null){
boton_registro.addEventListener("click", agregarRegistro);
//}

class MiConstructor{
    constructor(usuario,contrasena,confirmacion){
        this.usuario=usuario;
        this.contrasena=contrasena;
        this.confirmacion=confirmacion;
    }
}

function agregarRegistro(){
    const usuario=string.value;
    const contrasena=stringA.value;
    const confirmacion=stringB.value;

    let usuarioCreado=new MiConstructor(usuario,contrasena,confirmacion);
    
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

    string.value="";
    stringA.value="";
    stringB.value="";
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