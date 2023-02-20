//Empezaremos por declarar una función llamada "conversor" que me convertirá lo que el usuario proporcione, en lo que las fórmulas resulten, siempre y cuando éstos sean números.
function conversor(celsius) { //Celsius es el parámetro y la variable donde quiero que se guarde el resultado.
        if (Number.isInteger(celsius)) { //Primero empezamos por comprobar que lo proporcionado sea un número, "number.isInteger" nos ayuda a verificar ésto.
            let fahrenheit = (celsius * 1.8) + 32; //En dado caso de que sí sea un número, aplicamos a ese número la primera fórmula.
                document.write("Estos son los grados en farenheit: " + fahrenheit + "<br>"); //Investigando, añadí un "br" para que los resultados no salgan en lineas juntas.
            let kelvin= celsius + 273; //ésta variable tomará lo que se deposite en "celsius" cuando llame a la función, y verificará si es número, si sí lo es, hará la formula.
                document.write("Estos son los grados en Kelvin: " + kelvin + "<br>"); //me devuelve el resultado en kelvin.
        } else {
                document.write("Insertaste algún carácter o no insertaste un número entero, intenta de nuevo."); //Esto es por si el usuario inserta algún caracter que no sea un número.
        }
}

let celsius= parseInt(prompt("Ingrese solo el número de la temperatura")); //La variable la estoy declarando hasta aquí abajo

conversor(celsius); //Aquí llamo a la función, combinando que la variable establece un prompt