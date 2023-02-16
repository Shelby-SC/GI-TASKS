
//Esto es una variable, "texto" es una variable pero tambien puede llegar a ser un objeto o un arreglo
let texto = "Hola Mundo";
//En este caso observamos que se está convirtiendo en un objeto al ponerle el .length y al mismo tiempo en un arreglo porque si tiene length por logica, lo convertirá en una cadena de carácteres, y esa agrupación será un arreglo:
let mensaje = "El texto tiene" + texto.length

//Probar funcion completa:
let texto = "Hola Mundo";
let mensaje = "El texto tiene " + texto.length + " caracteres";
console.log(mensaje); //Resultado: "El texto tiene 10 caracteres"

/*************************************************** */

//PARA MANIPULAR UN ARRAY O CADENA DE CARACTERES USAR SIEMPRE UN CICLO (LOOP)

let texto = "Hola Mundo";
let mensaje = " ";
for (let i = 0; i < texto.length; i++) {
    mensaje += texto[i]; //"+=" concatenará el texto con espacios
}
console.log(mensaje); //El resultado será " H o l a  M u n d o "

//De igual forma, se añade un espacio en blanco al final y al inicio de cada objeto string (M_u_n_d_o_), se usa el ".trim"

let texto = "Hola Mundo";
let mensaje = " ";
for (let i = 0; i < texto.length; i++) {
    mensaje += texto[i]; //"+=" concatenará el texto con espacios
}
mensaje = mensaje.trim() //Con ésto quito los espacios al final y al inicio
console.log(mensaje); //El resultado será "H o l a  M u n d o"

/*************************************************** */

let texto = "Hola Mundo";
let palabra = texto.substr(0, 3); //En teoría esto está descontinuado, pero si me dio el resultado, lo que hace es tomar el primer parámetro como el índice, y el segundo parámetro es hasta donde tomará de caracteres.
console.log(palabra);

//Otra forma de usarlo es así:
let texto = "Hola Mundo";
let palabra = texto.substr(3); //Aquí no toma ningun indice pero toma el primer caracter y hasta el numero indicado, lo oculta. Deja expuesto el resto
console.log(palabra);

//Otra forma de usarlo es así:
let texto = "Hola Mundo";
let palabra = texto.substr(-3); //Si usamos un número en negativo, justamente recorre desde atrás y toma solo hasta el numero indicado de caracteres.
console.log(palabra);

/*************************************************** */

let texto = "Hola Mundo";
let palabra = texto.substring(5,7); //Toma a partir del índice 5 hasta el índice 7, pero justamente no me regresa el caracter en el 7, llega hasta el 6.
console.log(palabra);

/*************************************************** */
let texto = "Hola Mundo";
let palabra = texto.split(" ");
console.log(palabra[0] + " / " + palabra[1]);

/*************************************************** */

//Esta función trabaja como booleano, es decir que con include, si encuentra el carácter que le estamos dando como condicion, significa qe es verdadero, y entonces lo imprimirá. Pero si no es verdadero, solo no imprimirá nada.
let texto = "Hola Mundo";
 if (texto.includes("l")) { //Include lo que hace es buscar, simple y sencillamente. En la condición
        console.log("---> L");
 } 

 //En este caso incluso podemos continuar la función y pedirle que nos de un resultado visible en caso de ser false.
 let texto = "Hola Mundo";
 if (texto.includes("l")) { 
        console.log("---> L");
 } else {
    console.log("Este caracter no está en texto");
 }

 /*************************************************** */

//EJERCICIO: Let's make it more functional!


if(GPAacumulativo > 2.0 && unidadestotales >= 120) {
    console.log("Puede graduarse!");
}

//Ejercicio #2

if (cspCalificacion >= 75 || progCalificacion >= 75) {
        console.log("Eres elegible para la graduacion");
}

//Ejercicio #3

let texto = "Hola Mundo";
let dot = "";
for (let i = 0; i < texto.length; i++) {
    dot += texto[i]; 
}
console.log(dot);

/* 
Solución de un compañero:

let txt="Hello world"
function addPeriod(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i+1] !== " "&&str[i]!==" ") {
        newStr += str[i] + ".";
        } else {
        newStr += str[i];
        }}return newStr;
    }
console.log(addPeriod(txt))
*/
