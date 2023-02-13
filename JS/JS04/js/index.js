//¿Como declaro una variable y le digo que tipo de dato es?

//Aquí por solo poner el "numero 5" estos diciendole a mi variable que es de tipo numérico.
let miVariable = 5;

//Del mismo modo, si yo le agrego corchetes a una variable, desde ese momento le estoy diciendo que es un array. Éste arreglo es dimensional, y de igual manera tiene un índice "imaginario" que empieza en 0.
//Este arreglo es "array de tamaño 6 y de índice 5"
let miArray = [2,3,4,5,6,7];  

//Un arreglo también puede ser un objeto:
//Necesitamos usar una palabra clave o reservada que es "new" para hacer que un arreglo se comporte como objeto. Vamos a entenderlo como una instancia.
let miArray2 = new Array();

//Este es un arreglo multidimensional, es una matriz.
let miArray3= [
//   0 1 2  ...Cada arreglo tendría su indice desde 0.
    [1,2,3], //0
    [4,5,6], //1
    [7,8,9]  //2
];

//Siempre será en éste orden: Primero busca la fila, y luego busca la columna:

console.log("miArray3 " + miArray3[1]);
//Este debe darme el número 5
console.log("miArray3 " + miArray3[1][1]);
//Éste debe darme el número 9
console.log("miArray3 " + miArray3[2][2]);
//Este debe darme el número 2
console.log("miArray3 " + miArray3[0][1]);
//Éste debe darme el número 4
console.log("miArray3 " + miArray3[1][0]);

//Y para mostrar todo el índice:
console.log("Todo el índice " + miArray3[0]);
console.log("Todo el índice " + miArray3[1]);
console.log("Todo el índice " + miArray3[2]);

/* ***************************** BUCLE FOR **************************** */
//El for, repite tantas veces lo pidas, pero necesita saber donde iniciar y donde terminar. Parámetros que requiere: Inicio (Es la variable al que le agregas valor, en éste caso let i=0)
//El segundo valor es un operador logico, que es el segundo parámetro y que le dice si puede seguir o no, en éste caso no podrá seguir si se pasa de 10. (i < 10).
//El que mueve a la siguiente iteración, si el estado de i es 1, cuando llegue al ultimo parámetro, lo va a incrementar. Todo eso hasta que llegue al operador lógico.
//Repite i mientras sea menor que 10 y el valor ve incrementandolo de 1 en 1


let miArray = [2,3,4,5,6,7];

for(let i=0; i <= 5; i ++) {
    console.log("imprimiendo miArray -> " + miArray[i]);
}

//Para poder recorrer éste array, necesito trabajar con ciclos, es decir dos "i", ya que tengo 3 elementos en ésta matriz, con 3 subelementos cada uno.
let miArray3= [
        [1,2,3], 
        [4,5,6], 
        [7,8,9]  
];
    
for (let i = 0; i < 3; i++) { //Va a llegar a "2" por eso lo dejo en < 3
    for(let j=0; j < 3; j++) {//éste generalmente es más rapido que el primer for, éste recorre primero mientras i mantiene su posición.
        console.log("imprimir matriz1 " + miArray3[i][j]);
    }
    console.log("*******************");
}

/********************************* ciclo con WHILE ********************/

//Es parecido al For, sin embargo éste ciclo solo requiere de 1 condición en vez de 3, para while solo se necesita definir
//Sus parámetros solo son para la prueba lógica.
//Esa condición generalmente se define por fuera, es decir, con una variable externa.

/*

let variable inicio

while(condicion){

} do {

} while();

*/

let contador = 0;

while(contador < 10) {
    console.log(contador);
    contador++; //La iteración debe estar justo después(al final), porque esto permite que "contador" al inicio sea "0" cuando llega al console.log, pero luego incrementa y vuelve a guardarse en la variable con su nuevo valor, y pasa por while, hace la comparación de la operación logica y si se cumple, vuelve a imprimirse ese nuevo valor, y luego otra vez se incrementa y guarda un nuevo valor.
}


