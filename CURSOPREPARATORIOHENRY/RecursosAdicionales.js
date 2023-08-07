//SWITCH

var expr = "¿Que frutas vendes?";

switch (expr) {
    case "¿Que frutas vendes?":
        console.log("Vendemos Naranjas, Manzanas, Platanos, Cerezas, Papayas, Mangos y Ya...")
        break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr + '.');
  }
  
  console.log("¿Hay algo más que quisiera consultar?");

var expr2 = "Naranjas";

switch (expr2) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr2 + '.');
  }

//DO...WHILE

let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);

var Resultado = "";
var suma = 0;

do {
  suma = suma +1;
  Resultado = Resultado + suma;
} while (suma < 10 );

console.log(suma);

//CONTINUE AND BREAK

const numeros = [1,2,3,4,5,6,7,8,9,10];

for (i = 0 ; i < numeros.length ; i++){
  if (i % 2===0){
    continue;
  }
  console.log(numeros[i])
}

for (i = 0 ; i < numeros.length ; i++){
  if (i === 5){
    break;
  }
  console.log(numeros[i])
}



