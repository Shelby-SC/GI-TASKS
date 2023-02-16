/* *************** EJERCICIO #1 ************ */

//Parte 1: crear el array
let people = ["Sofia", "David", "Juan"];
    console.log(people);
//Parte 2: Añadir 2 elementos nuevos al array, usamos concat para ésto.
let newPeople = people.concat("Sara", "Agustín");
    console.log(newPeople);
//Y también nos dicen que la persona 1, ya se fue de la fila, hay que quitarla. 
let remover = newPeople.splice(0,1);
    console.log(newPeople);
//Parte 3
let newPeople = [ 'David', 'Juan', 'Sara', 'Agustín' ];
let add = newPeople.splice(1,1,"Renata");
    console.log(newPeople);
let add2 = newPeople.push("Elena"); 
    console.log(newPeople);

//¿Diferencia push y concat? además de que concat añade más elementos de un solo jalón, me modificaría la lista, es decir, el array me lo cambiaría a otra variable (add2 por ejemplo); en cambio con "push" aunque me añade solo 1 elemento, lo hace modificando dentro del mismo array, sin arrojarme uno nuevo (por eso el console.log funciona con newPeople aún).

/* ************** EJERCICIO #2 ********************** */

for (let i = 1; i <= 5; i++) {
        let row = "";
    for (let j=1; j <= i; j++) {
        row += "* ";
        console.log(row);
    }
}

let myarray=[];

for (let i = 0; i <= 4; i++) {
    myarray.push(i);
}

console.log(myarray);

/* For loop exercise: 
Write a program that prints out the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the number, and for the multiples of five, print "Buzz". For numbers which are multiples of both three and five, print "FizzBuzz". */

for (let i = 1; i <= 10; i++) {
        console.log(i);
        i += 1;
        
}