//Empezamos a crear la función, la llamaremos fibonacci, en congruencia con el nombre del botón.

function fibonacci(){
    //Definimos la variable que tomará y llamará el valor que inserte el usuario en el input.
    let numChoice = parseInt(document.querySelector("#numinsert").value); //usamos un querySelector con el "#" que significa que llamará al id.
    if (isNaN(numChoice)) { //Ponemos la condición, si el boolean isNan indica true, es decir que no se insertó un número...
        alert("Este no es un numero entero, intente de nuevo"); //Nos mandará esta alerta.
        return;
    } else if (numChoice < 0) { //Nuestro número tampoco puede ser negativo, así que aplicamos una segunda condición.
        alert ("Por favor ingrese un número mayor a cero");
        return;
    } else { //Si no es el caso, y el user ingresa el número entero correcto, procedemos a la operación para conseguir la serie fibonacci.
        //Definir valriable, primero valdrá los dos numero que fibonacci establece de inicio: 
        let sucesion = "0 1";
        //Definir variable con los que inicio la sucesión, tienen que haber ya 2 numeros por default para que se haga la suma y me de el tercer número y así sucesivamente.
        let num1 = 0;
        let num2 = 1;
        //Definimos el for loop, esta vez, i tiene que empezar en el índice 2, pues sería darme el 3er numero ya que los 2 anteriores están ya estalecidos por default.
        for (i = 2; i < numChoice; i++) {
            //Aquí se realiza la operación del fibonacci:
            let operacion = num1 + num2; //Operación vale la suma de los primeros dos numeros o los anteriores dos numeros.
            sucesion += " " + operacion;
            num1 = num2; //Aquí actualizaremos valores, para que nos vayamos corriendo a los otros numeros de la serie.
            num2 = operacion; //Finalizamos la actualización de valores para seguir la logica de la operacion del fibonacci.
        }
        document.querySelector(".resultado").innerHTML = sucesion;
    }
}
