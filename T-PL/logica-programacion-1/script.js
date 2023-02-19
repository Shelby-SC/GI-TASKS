

/* Primer paso: Solicitar al usuario que coloque 3 números */ 

//Aquí solicito el primer número al usuario.ParseInt: Esto lo aplico para que el número ingresado sí sea realmente un número. prompt: Ésto hará que el programa pregunte al usuario y que el dato ingresado se guarde. La variable "num1" guardará lo que el usuario ingrese.
/*let numb1 = parseInt(prompt("Por favor, ingrese su primer número")); 
//console.log(numb1);
let numb2 = parseInt(prompt("Por favor, ingrese su segundo número"));
//console.log(numb2);
let numb3 = parseInt(prompt("Por favor, ingrese su tercer número"));
//console.log(numb3);

/* Fin de la primera parte*/

/*Inicio de la segunda parte, comparar números ingresados */

        /* PASO FALLIDO: Empecé haciendolo de ésta forma, pero me detuve al sentir que estaría haciendo demasiado código y demasiadas condicionales, pensé que debía haber una forma más fácil. Al final, existe otra función que de manera natural pasa a través de números y los verifica.

        if (numb1 > numb2 && numb1 > numb3) { //Aquí comparará el numb1 ingresado, "¿Es mayor que el segundo número ingresado?"
            console.log(numb1); //Si numb1 es mayor, imprímelo por consola.
        } else if (numb1 === numb2) { //Pero, si numb1 y numb2 son iguales...
            console.log("El primer y el segundo número son iguales."); //imprime un mensaje que lo indique, aunque me muestres los números.
        } else if (numb2 > numb3) { //Ahora comparame numb2 y numb3, ¿Es mayor el 2do numero que el 3er numero?
            console.log(numb2);
        } else if (numb2 === numb3) {
            console.log("El segundo y el tercer número son iguales");
        } */

/* VERDADERO INICIO de la segunda parte */

/* let array1 = [numb1,numb2,numb3]; //Quiero que cuando el usuario proporcione los números, éstos se guarden en una lista.
//console.log(array1);  //***Generalmente uso console.log en cada pequeño paso para verificar que mi sintaxis esté correcta.
//console.log(array1.sort()); //Este me dará los números del usuario de menor a mayor.
//console.log(array1.reverse()); //Este me dará los números del usuario de mayor a menor.

if (numb1 === numb2) {
    console.log("El numero 1 es igual al numero 2");
} else if (numb1 === numb3) {
    console.log("El numero 1 es igual al numero 3");
} else if (numb2 === numb3) {
    console.log("El numero 2 es igual al numero 3");
} else {
    console.log("Aquí tienes la lista de menor a mayor: " + array1.sort());
    console.log("Aqui tienes la lista de mayor a menor: " + array1.reverse());
}
*/

//Y finalmente, quise englobarlo todo en una función:
function numberFest() {
    let numb1 = parseInt(prompt("Por favor, ingrese su primer número")); 
    let numb2 = parseInt(prompt("Por favor, ingrese su segundo número"));
    let numb3 = parseInt(prompt("Por favor, ingrese su tercer número"));
        let array1 = [numb1,numb2,numb3]; 
            if (numb1 === numb2) {
                console.log("El numero 1 es igual al numero 2");
            } else if (numb1 === numb3) {
                console.log("El numero 1 es igual al numero 3");
            } else if (numb2 === numb3) {
                console.log("El numero 2 es igual al numero 3");
            } else {
                console.log("Aquí tienes la lista de menor a mayor: " + array1.sort());
                console.log("Aqui tienes la lista de mayor a menor: " + array1.reverse());
            }
}

buttonStart.addEventListener("click", numberFest);
