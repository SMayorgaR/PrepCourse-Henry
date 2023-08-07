//AND

function numMayorYPar(num) {
    if (num > 5 && num < 15 && num % 2===1) console.log(true);
    else console.log(false);
}

numMayorYPar(7);

//OR

function operadorOr(str) {
    if (str === "ORAIGHT ORAIGHT BABY" || str.length > 3) console.log(true);
    else console.log(false);
}

operadorOr("ORAIGHT ORAGIHT BABY TU ME PARTISTE EL CORAZON");

//NEGACION

function negacion(permiso) {
    if (!permiso) console.log("Tiene permiso");
    else console.log("No tiene permiso");
}

negacion(true);
negacion(false);

//OPERACION UNIDA

function operacionCompleja(num) {
    if (num > 10 && num % 2===1 || num === 3 || num ==! 11) console.log(true);
    else console.log(false);
}

operacionCompleja(15);
operacionCompleja(3);
operacionCompleja(6);
operacionCompleja(11);
operacionCompleja(2);

let num = 5.5;

console.log(num % 1 === 1)