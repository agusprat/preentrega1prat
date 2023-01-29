let nombre = prompt("¿cual es tu nombre?");

alert("hola " + nombre + ", bienvenido a la calculadora de prat" );

let numero1 = prompt("Escribe tu primera cifra");
let numero2 = prompt("Escribe tu segunda cifra");


let operacion = prompt("¿que operacion quiere realizar? sumar, restar, dividir o multiplicar");

if(operacion == "sumar"){
   let resultado = parseInt(numero1) + parseInt(numero2)
   alert("El resultado es " + resultado)
};
if(operacion == "restar"){
   let resultado = parseInt(numero1) - parseInt(numero2)
   alert("El resultado es " + resultado)
};
if(operacion == "dividir"){
   let resultado = parseInt(numero1) / parseInt(numero2)
   alert("El resultado es " + resultado)
};
if(operacion == "multiplicar"){
   let resultado = parseInt(numero1) * parseInt(numero2)
   alert("El resultado es " + resultado)
};
let open = prompt("¿que operacion quiere hacer? salir, volver");

while(open!= "salir"){
   let nombre = prompt("¿cual es tu nombre?");

alert("hola " + nombre + ", bienvenido a la calculadora de prat" );

let numero1 = prompt("Escribe tu primera cifra");
let numero2 = prompt("Escribe tu segunda cifra");

let operacion = prompt("¿que operacion quiere realizar? sumar, restar, dividir o multiplicar");
if(operacion == "sumar"){
   let resultado = parseInt(numero1) + parseInt(numero2)
   alert("El resultado es " + resultado)
};
if(operacion == "restar"){
   let resultado = parseInt(numero1) - parseInt(numero2)
   alert("El resultado es " + resultado)
};
if(operacion == "dividir"){
   let resultado = parseInt(numero1) / parseInt(numero2)
   alert("El resultado es " + resultado)
};
if(operacion == "multiplicar"){
   let resultado = parseInt(numero1) * parseInt(numero2)
   alert("El resultado es " + resultado)
};
let open = prompt("¿que operacion quiere hacer? salir, volver");

}