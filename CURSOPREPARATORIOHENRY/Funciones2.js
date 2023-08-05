//Funciones

function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
}

function otraFuncion() {
    return (
        "El nombre retornado de el 'cuidadoConElConsoleLog' es: " +
        cuidadoConElConsoleLog("Camilo")
    );
}

function cuidadoConElReturn(nombre) {
    return nombre;
    console.log(nombre);
}

//Ejemplo

function wasapasa(numero) {
    return numero;
    console.log(numero);
}

var numero = 3160281849;

function wasaa() {
    return ("Cual es el numero del wasapasaaa?....Ah si es: " + wasapasa(numero));
}

//Ejemplo 2

function holauwu(saludo) {
    return saludo;
    console.log(saludo);
}

var saludo = "ORAIGHOIRAIGH BABY TU ME PARTISTE EL CORAzooon";

function holaowo() {
    return ("Alo000?? con quien hablo....." + holauwu(saludo));
}