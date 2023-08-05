//Funciones

function sumarTres(x){
    console.log(x + 6);
}

sumarTres(3);

//Primer Manera

function sumarTres(x){
    return x + 9;
}

sumarTres(5);

//Segunda Manera

var sumarTres = function(x){
    return x + 8;
};

//Tercera Manera

var sumarTres = (x) =>{
    return x + 1;
}

sumarTres(8);