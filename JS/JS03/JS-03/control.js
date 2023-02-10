//Condicionales

// if (parametro) {
        //Este es el bloque de código
// } else



let edad = parseInt(prompt("Escribe tu edad"));

if (edad <= 17 ) {
    document.write("Eres chiquitin");

} else if (edad === 18) {
    document.write("Eres mayor de edad");

} else if (edad > 18) {
    document.write("estás ruco");
}

else {
    document.write("Este no es un numero válido");
}