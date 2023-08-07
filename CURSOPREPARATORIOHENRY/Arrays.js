//ARRAYS//

let listaDeCompras = [];

listaDeCompras[0] = "Mayonesa";
listaDeCompras[1] = "Lechuga";
listaDeCompras[2] = "Tomate";

//console.log(listaDeCompras);
//let elementoDelArray = listaDeCompras.length;
let elementoDelArray = listaDeCompras[2];

console.log(elementoDelArray);

//METODOS PUSH, UNSHIFT, POP, SHIFT//

let colores = ["Amarrillo", "Azul"];

colores.push("Rojo"); //AGREGA AL FINAL un elementp
colores.unshift("Bandera de Colombia: "); //AGREGA AL INICIO un elemento
colores.pop(); //ELIMINA el ultimo elemento
colores.shift();// ELIMINA el primer elemento

console.log(colores);

//METODO INCLUDES//

let furbo = ["Messi", "Cr7", "James", "Falcao"];

let incluyeFurbo = furbo.includes("Neymar");

console.log(incluyeFurbo);

//EVERY//

let num = [1, 5, 3, 4];

let edadRequerida = num.every ((num) => {
    return (num <= 5);
});

console.log(edadRequerida);

let nume = [15, 20, 12, 36];

let edadMinima = nume.every((nume) =>{
    return (nume >= 10);
});

console.log(edadMinima);

//METODOS SPLIT Y JOIN//

let nombre = "Santiaga";

let nombreSeparado = nombre.split("");
nombreSeparado.pop();
nombreSeparado.push("o");
let nombreArreglado = nombreSeparado.join("");

console.log(nombreArreglado);

//FOR EACH Y MAP//

let numeros = [1, 2, 3, 4];

numeros.forEach((numeros) => console.log(numeros));
numeros.forEach((numeros) => {
    if (numeros === 4) {
        console.log(numeros);
    }
});

let masUno = numeros.map((numeros) => {
    return numeros * 8 ;
});
console.log(masUno);

//BUCLES FOR Y WHILE//

//FOR

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length ; i++) {
    console.log(arr[i])
}

function encontrarLaP(string){
    let palabra = string.split("");

    for (let i = 0; i < palabra.length ; i++){
        if (palabra[i] === "p"){
            console.log("Si tiene P")
        }
    }
}

encontrarLaP("MAlumaprettyvoy");

//WHILE

let arry = [];

while(arry.length < 6){
    arry.push("BOOM");
}

console.log(arry);

//BUCLE INFINITO

let arrys = [];
let n = 1;

while (n < 3){
    arrys.push(Math.random());
}

