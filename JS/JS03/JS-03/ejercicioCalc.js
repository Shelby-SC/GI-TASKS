

let diaNumero = parseInt(prompt("¿Qué día es hoy? Escribe un numero del 0 al 6"));

if (diaNumero === 0) {
    document.write("Hoy es domingo");

} else if (diaNumero === 1) {
    document.write("Hoy es lunes");

} else if (diaNumero === 2) {
    document.write("Hoy es Martes");
    
} else if (diaNumero === 3) {
        document.write("Hoy es Miercoles");

} else if (diaNumero === 4) {
        document.write("Hoy es Jueves");

} else if (diaNumero === 5) {
        document.write("Hoy es Viernes");

} else if (diaNumero === 6) {
        document.write("Hoy es Sabado");

} else {
        document.write("Numero de dia inválido");
}