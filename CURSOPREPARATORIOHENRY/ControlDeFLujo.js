//Operadores Condicionales

function viajar(destino) {
    if (destino === "Brasil") {
        console.log("Gire a la Izquierda");
    } else if (destino === "Colombia") {
        console.log("Gire a la Derecha")
    } else {
        console.log("NOS PERDIMOS PAPUH")
    }
}

viajar("CPeru");

//Ejemplo

function puedeManejar(edad) {
    if (edad >= 18) {
        console.log(true);
    } else if (edad <= 17) {
        console.log(false);
    } else if (edad > 70) {
        console.log("Algo anda mal PAPUH")
    }
}

puedeManejar(10);
