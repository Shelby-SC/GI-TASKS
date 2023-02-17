
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

















//Construir nuestra calculadora

var input1 = document.getElementById("input1");
var input1 = document.getElementById("input2");

var bottonSuma= document.getElementById("botonSuma");
var bottonResta= document.getElementById("botonResta");
var bottonMultiplicacion= document.getElementById("botonMultiplicacion");
var bottonDivision= document.getElementById("botonDivision");

var resultado = document.getElementById("resultado");