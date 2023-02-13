
function businessHours(dayNumber, hourNumber) {
        if (dayNumber => 1 && dayNumber <= 5) {
                    document.write("Estamos en semana laboral");

        } else if (hourNumber => 9 && hourNumber <= 17) {
                    document.write ("Estamos en horario laboral");
        } else {
                document.write ("No estamos en horario laboral");
        }
} 

let dayNumber = 7;
let hourNumber = 18;

businessHours(hourNumber);

//Aun está en proceso ésta tarea//