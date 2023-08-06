export function valida(input) {
    const tipoDeInput = input.dataset.tipo;
    if (validaroes[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTMML = ""
    }else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTMML = mostrarMensajeDeError(tipoDeInput, input)

    }

}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMisMatch",
    "customError",
];

const mensajeDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacio",
    },
    email: {
        valueMissing: "El campo correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    },
    password: {
        valueMissing: "El campo contrasena no puede estar vacio",
        patternMismatch: "Al menos 6 caracteres, maximo 12,debe contener una letra minuscula, una letra mayuscula,un numero y no puede contener caracteres epeciales.",
    },
    nacimiento: {
        valueMissing:"El campo nacimiento no puede estar vacio",
        customError: "Debe tener al menos 18 anos de edad",
    },
    numero: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El formato requerido es XXXXXXXXXX 10 numeros",
    },
    direccion: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La direccion debe contener entre 10 a 40 caracteres",
    },
    cuidad: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "La cuidad debe contener entre 10 a 40 caracteres",
    },
    estado: {
        valueMissing: "Este campo no puede estar vacio",
        patternMismatch: "El estado debe contener entre 10 a 40 caracteres",
    },
};

const validadores = {
    nacimineto: (input) => validarNacimiento(input),
};

function mostrarMensajeDeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach(error => {
        if(input.validity[error]){
            console.log(tipoDeInput, error);
            console.log(input.validity[error]);
            console.log(mensajesDeError[tipoDeInput][error]);
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })
    return mensaje
}

function validarNacimiento(input){
    const fechaCliente = new Date (input.value);
    let mensaje = "";
    if(!mayorDeEdad(fechaCliente));
    mensaje = "Debe tener al menos 18 anos de edad";
    
    input.setCustomValidity(mensaje)
}


function mayoDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18,
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
    );
    return diferenciaFechas <= fechaActual;
};