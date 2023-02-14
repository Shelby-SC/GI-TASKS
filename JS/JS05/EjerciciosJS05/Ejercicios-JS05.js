//************************ EJERCICIO 1 *******************/

//*PARTE 1: Agregar un elemento a la lista, en éste caso mi propio nombre*/
let names = ["Maria", "Antony", "Joy", "Juan"];
names.push("Shelby"); //Para lograrlo, utilizamos el arreglo ".push", añade mi nombre al final de la lista.
console.log(names);

/* fin parte 1 */

//* PARTE 2: Escribimos una función que inspeccione la lista y busque un nombre en ella, si el nombre existe en la lista, debe devoler "true", si no existe en la lista, debe devolver "false" *//

let names=["Maria", "Antony", "Joy", "Juan"]; //Paso 1: defino la lista de nombres.

function findName(names, newName) { //Voy a iniciar la función definiendo 2 parámetros, una es la lista y otra, es donde pondré un nombre        para                                  que lo compruebe en la lista.
    for(i = 0; i < names.length; i++) { //Usé el "For" loop para que la "i" pase por toda la lista y revise los nombres.
        if (names[i] == newName) { //Aquí empieza la comparación que me define si obtengo false o true.
            return true;
        }
    }
    return false;
}
console.log(findName(names, "Shelby"));
/* fin parte 2 */

//* PARTE 3: Escribir una función que inspeccione una lista de nombres, esta funcion debe comparar las listas de nombres *//

let names=["Maria", "Antony", "Joy", "Juan"];
let newNames= ["Maria", "Almendra", "Cielo", "Joy"]; 

function addNames() {


}


//* PARTE 4: Escribir una función que tome una lista de nombres y devuelva una lista de números con el largo de los nombres en el mismo rango o lugar donde estás *//

let names=["Maria", "Antony", "Joy", "Juan"];





//************************ EJERCICIO 2 **********************//

console.log(false || (true && false)); //Primero evalúa lo que está en paréntesis "True && false", esto nos da "false" ya que para que nos de verdadero, tendría que compararse dos expresiones verdaderas. Luego la comparación quedaría "false || false" lo que da "false" ya que necesitamos un "verdadero" para que dé verdadero.

console.log(true || (11 + 12)); //El resultado sería "true", ya que en el operador lógico || se evalúa lo que está a la izquierda primero: true es verdadero y, por lo tanto, la expresión completa es verdadera, independientemente de la operacion de la derecha. El operando derecho 11 + 12 se evalúa, pero no afecta el resultado final de la expresión.

console.log((31 + 22) || true); //Caso contrario al anterior, esta expresión sigue siendo "Verdadera" ya que el valor de la expresión es "53" debido a la suma, y cualquier numero distinto de "0" en Javascript, es verdadero. El "true" de la derecha no afecta el resultado, ya que el operador lógico || evalúa lo de la izquierda.

console.log(true && (1 + 7)); //Este caso también sería "true", ya que la operación (1+7) nos da "8" y como dijimos, cualquier numero distinto de 0 es verdadero en javascript; el operador && también evalúa a la izquierda, así que de igual forma aun sin considerar la operación, habría sido true.

console.log(false && (3 + 4)); //False, según el mismo razonamiento, rige la evaluación de la izquierda, asi que desde el inicio la operación es falsa, pues lo de la derecha no influye.

console.log((1 + 2) && true); //true

console.log((32 * 4) >= 129); // False, ya que la operación evaluada de la izquierda es menor a la de la derecha.

console.log(false !== !true); //false. Primero, se evalúa el operador de negación ! aplicado a true, lo que da como resultado false. Por lo tanto, la expresión original se convierte en false !== false.El operador de desigualdad estricta !== compara los operandos sin realizar una conversión de tipo, lo que significa que dos valores son considerados iguales solo si tienen el mismo valor y el mismo tipo. En este caso, ambos operandos son del tipo boolean, por lo que solo necesitamos comparar sus valores, en éste caso "false y false"

console.log(true === 4); //false. Debido a que el operador es estricto "===" y los valores no son iguales, por un lado el "true" es un tipo de dato boolean, y el "4" es un tipo de dato numérico, por lo que da como resultado, false.

console.log(false === (847 === '847')); //true. Ya que, se evalúa primero lo del paréntesis, en éste caso, un número es de tipo numérico (int) y el otro es de tipo string, por lo tanto como tiene un operador estricto (===), esa expresión es "false"; luego compara de manera estricta (===) con el valor de false, y como ambos son del tipo booleano, false === false es "true". NOTA: El operador de igualdad estricta === en lugar del operador de igualdad normal ==, realiza una conversión de tipo antes de comparar los valores, la expresión 847 === '847' devuelve false y, por lo tanto, false === false devuelve true.

console.log(false === (887 == '887')); //false

console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false); //true


/****************** EJERCICIO # 3 ************************/
//Escribir una función que muestre 

function rangeNumbers(numbers) {
    if (numbers >= 0 && numbers <= 25) {
      console.log(numbers + ' is between 0 and 25');
    } else if (numbers >= 26 && numbers <= 100) {
      console.log(numbers + ' is between 26 and 100');
    } else if (numbers > 100) {
      console.log(numbers + ' is greater than 100');
    } else {
      console.log(numbers + ' is less than 0');
    }
  }

  rangeNumbers(30);

  /* Fin del ejercicio #3 */