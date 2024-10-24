//array para verificar que no se repita el numero de codigo
const numerosCargado = [];

function validarCodigo(msg = "") {
    let numero;
    let valido;


    do {
        numero = parseInt(prompt(msg));

        if (isNaN(numero)) {
            alert("Solo se aceptan números");
            valido= false;
        } else if (numero < 1 || numero > 999) {
            alert("El número debe estar entre 1 y 999");
            valido= false;
        } else if (numerosCargado.includes(numero)) {
            alert("Este número ya ha sido utilizado. Ingrese otro número.");
            valido= false;
        } else{
            valido=true;
        }
        
    } while (!valido);

    numerosCargado.push(numero);
    return numero;
}

function validarNumero(msg = "") {
    let valido; 
let numero;
    do {
        numero = parseInt(prompt(msg));

        if (isNaN(numero)) {
            alert("Solo se aceptan números");
            valido= false;
        } else if (numero < 1 || numero > 7200) {
            alert("El número debe estar entre 1 y 7200");
            valido= false;
        } else{
            valido=true;
        }
        
    } while (!valido);

    return numero;
}


function validarString(msg) {

    let str, datoValido = true;
    do {
        str = prompt(msg);

        if (str === null || str.trim() === "") {
            alert("Complete el campo");
            datoValido = false;
        }
       
        else {
            datoValido = true;
        }

    } while (!datoValido);

    return str;
}

function validarURL(msg) {
    let str;
    let datoValido = false;

    do {
        str = prompt(msg);

        if (str === null || str.trim() === "") {
            alert("Complete el campo");
            datoValido = false;
        } else if (!isUrlValid(str)) {
            alert("Ingrese una URL válida");
            datoValido = false;
        } else {
            datoValido = true;
        }
    } while (!datoValido);

    return str;
}


function isUrlValid(srt) {
    try {
      new URL(srt);
      return true;
    } catch (err) {
      return false;
    }
  }


