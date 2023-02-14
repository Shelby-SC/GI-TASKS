/* TODOS ESTOS MÉTODOS ES PORQUE ESTAMOS VIENDO ÉSTOS ARREGLOS COMO OBJETOS */

let lista = [12,5,80,34,7];
for ( let i = 0; i < lista.length; i++) {
    console.log("-->" + lista[i]); //Con esto me dará uno a uno los valores.
}
console.log(lista); //Con este me dará todo el rango

let lista = [12,5,80,34,7];
let listaNueva = lista.slice (1,4); //Eso lo que hace es darme los números en el índice del rango solicitado (1,4) pero el "4" me indica hasta donde se detendrá o no tomará. Es decir que me imprime: 5,80,34. 
console.log(listaNueva);

let lista = [12,5,80,34,7];
let msj = lista.join("-");
console.log(msj);

let lista = [12,5,80,34,7];
lista.push(100); //Con este método solo puedo agregar 1 elemento a la lista, siempre suele agregarse al final
console.log(lista);

let lista = [12,5,80,34,7];
let masE= lista.concat(100,200,300); //Con éste método se puede agregar más de 1 elemento al final de la lista.
console.log(masE);

let lista = [12,5,80,34,7];
lista.pop(); //Puedo mandarlo así lista.pop(); sin especificar numero porque al final ésta función elimina el último elemento de la lista.
console.log(lista);

let lista = [12,5,80,34,7];
lista.shift(); //Esto elimina el primer elemento de la lista.
console.log(lista);

let lista = [12,5,80,34,7];
let remover = lista.splice(1,2); //Éste elemento elimina los elementos que están en el índice indicado entre los paréntesis, toma exactamente esos elementos, no limita hasta el índice, por lo que removería al 5 y al 80.
console.log(remover);
console.log(lista);


let lista = [12,5,80,34,7];
lista.splice(2,0,100,200,300); //El primero elimina el número en el índice 2, el segundo parámetro me indica cuántos lugares recorrer, y lo demás es agregar los números.** estudiar más éste**
console.log(lista);

let lista = [12,5,80,34,7];
lista.reverse(); //Pone en sentido contrario los números.
console.log(lista);

let lista = [12,5,80,34,7];
lista.sort();
console.log(lista);

let lista = [12,5,80,34,7];
lista.sort(
    function(valor1, valor2){
        return valor1 > valor2;    //El return me detiene la función pero además almacena en la memoria el valor para devolvermelo.
    }
);
console.log(lista);


/* DIFERENCIA ENTRE CONCAT Y PUSH */
//El método push () agrega uno o más elementos al final de la matriz y devuelve la nueva longitud.
/*
var a = [1,2,3,4];
a.push (5); // a ahora es 1, 2, 3, 4, 5

*/

//El método concat () se utiliza para concatenar dos o más matrices. Este método no cambia la matriz existente, solo devuelve una copia de la matriz conectada.

/*
var a = [1,2,3,4];
var b = [5,6];
var c = a.concat (b); // las matrices a, b no cambian, c se convierte en 1, 2, 3, 4, 5, 6
*/
