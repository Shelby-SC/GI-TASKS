
    /*

Que encontramos en el arbol del DOM?

 - Node: Es la unidad mas basica dentro del documento. Puede ser una etiqueta, un texto dentro de una etiqueta o un comentario, etc. 

    <title> NODO
        Manipualacion DOM //Es un nodo, pero es hijo del title
    </title>


 - Document: Tambien es un nodo, del tipo documento, es el nodo raiz a partir del cual se desarrollan o generan todos los demas nodos.

 - Element: son todos aquellos definidos por etiquetas <div>, <img>, <h1>, <p>

 - Attributes: Nodos que dan informacion asociada al tipo de elemento

 - Comentario: Comentarios y otros elementos que estan dentro del HTML, son considerados nodos.


*/

/*

var elementoId = document.getElementsById("bottonSuma");
console.log(elementoId);

var elementoTag = document.getElementsByTagName("botton");
console.log(elementoTag);

var elementoClassName = document.getElementsByClassName("botones");
console.log(elementoClassName);

/*

Metodos recientes

    - document.querySelector(#botones)
    - document.querySelectorAll(.botones)
Ej:
var unElemento = document.querySelector("#input1");
console.log(unElemento);

/*

    - Creación de nodo:
    document.createElement(tipoNodo);

*/

//Creacion de una etiqueta del tipo imagen 
var imagenPerrito = document.createElement("img");

//Creamos atributos a la etiqueta
imagenPerrito.src = "https://www.petdarling.com/wp-content/uploads/2021/01/cachorros.jpg";
imagenPerrito.alt = "Foto de perrito tierno"
imagenPerrito.style.width = "150px";

//Poner elementos o nodos en el html
//append: significa inserta, esa es la instrucción del append.

document.body.append(imagenPerrito);


//Actualizar nodos
//1er paso: identificar el nodo que quiero cambiar. (outer)
//2do paso: Modificar el nodo (inner)

var resultadoQueCambia = document.getElementById("resultado");

resultadoQueCambia.innerHTML = "Saludos, cambie el texto juas juas"

/* NOTAS DE FELIPE:
//Actualizar nodos

//Identidicar el nodo con un metodo para tomarlo (getElemento o QuerySelector y modificarlo con inner.HTML)


var resultadoQueCambia = document.getElementById("resultado");


resultadoQueCambia.innerHTML = "Saludos, cambie el texto juas juas"; */


/*

Manipulacion del DOM


    - Metodos para acceder a elementos 

        - document.getElementById
        - document.getElementsByTagName
        - document.getElementosByClassName


    - Metodos para crear elementos  

        - document.createElement(etiqueta)
        - document.createTextNode(texto) - Investigar


    - Metodos para insertar elementos

        - parentElement.append
        - parentElement.insertBefore
        - parentElement.insertAdjacentElement


    - Metodos para modificar elementos

        - node.outerHTML (leer o referenciar el elemento)
        - node.innerHTML (modificar el elemento)


*/


//Primer paso: Definir con que voy a interactuar (almacena en una variable)

const textoAModificar = document.querySelector("#h1")

//Crea una function...
function cambiarColor(color) {
    textoAModificar.style.color = color;
}




//Construir nuestra calculadora

var input1 = document.getElementById("input1");
var input2 = document.getElementById("input2");

var bottonSuma= document.getElementById("botonSuma");
var bottonResta= document.getElementById("botonResta");
var bottonMultiplicacion= document.getElementById("botonMultiplicacion");
var bottonDivision= document.getElementById("botonDivision");

var resultado = document.getElementById("resultado");

//Construimos las funciones de nuestra calculadora

function suma() {
    let valor1 = parseInt(input1.value);
    let valor2 = parseInt(input2.value);
    let suma = valor1 + valor2;
    resultado.innerHTML = suma;

}

function resta() {
    let valor1 = parseInt(input1.value);
    let valor2 = parseInt(input2.value);
    let resta = valor1 - valor2;
    resultado.innerHTML = resta;
}

function multiplicacion() {
    let valor1 = parseInt(input1.value);
    let valor2 = parseInt(input2.value);
    let multiplicacion = valor1 * valor2;
    resultado.innerHTML = multiplicacion;
}

function division() {
    let valor1 = parseInt(input1.value);
    let valor2 = parseInt(input2.value);
    let division = valor1 / valor2;
    resultado.innerHTML = division;


}

/*Como se crea un evento (addEventListener)

    - node.addEventListener ("evento a escuchar", lo que quiero que haga)
        -node (nodo donde aterrizo el evento)
        - addEventListener (palabra reservada para usar el evento)
        - evento a escuchar (click, mouseover, etc)
        - lo que quiero que haga (la llamada de la función)

*/

bottonSuma.addEventListener("click", suma);

bottonResta.addEventListener("click", resta);

bottonMultiplicacion.addEventListener("click", multiplicacion);

bottonDivision.addEventListener("click", division);