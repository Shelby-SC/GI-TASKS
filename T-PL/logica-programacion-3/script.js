
//Primero definimos el nombre de la función, debe ser el mismo que el que tenemos en el botón del input en el html.
function factorial(){
    //Definimos la variable donde vamos a guardar el número ingresado por el usuario por medio del input. "parseInt" nos servirá para convertir a número, y "document.getElementById("numinsert") está justamente llamando al valor del input, pues es el nombre del id que tiene en el html. El ".value" es para obtener el valor del elemento, si no lo usamos, el "document.get..." simplemente nos devolvería el argumento que se ingresa en el elemento id, pero no el valor de éste, que seria lo ingresado por el usuario. Con .value accedemos.
  let userNum = parseInt(document.getElementById("numinsert").value);
  //¿Que pasa si no recibimos un número por parte del usuario? hay que mandar una alerta:
    if (isNaN(userNum)){  //Definimos la función if, y usamos "isNan" que es un tipo booleano que comprobará si es o no un número.
        alert("Not a number, please try again"); //Si el boolean "isNan" detecta un true, lanzará la alerta al usuario.
        return;
 //Pero, ¿que pasa si el usuario ingresa un número negativo?
    } else if (userNum < 0) { //Cualquier número menor a "0" es un número negativo.
        alert("Please enter a non negative number"); //Y me mandará la alerta.
          return;
    //Si ninguno de los casos anteriores se cumple, y todo va correcto, ahora sí definimos la operación a realizar para factorizar los números: Factorización es el producto de todos los numeros enteros hasta llegar al número, es decir: n = n(n-1) x n(n-2), o: 4 != 4*3*2*1. Ya tenemos el "4" pues ese lo ingresa el usuario, pero necesitamos también guardar los numeros con los que se hará la operación.
    } else { 
        let result = 1; //definimos la variable que guardará esos numeros enteros y le damos valor de 1, porque todo número multiplicado por 1 nos dará el número, y si fuese 0, el factorial de todas formas sería 0.
        for (i = userNum; i > 0; i--) { //con el for loop, vamos a iterar por una lista, ¿que lista? la del número que nos de el usuario. Esa lista que se llama "i" y que a su vez es "userNum", tiene que ser mayor que 0, para evitar negativos. A su vez, irá decreciendo.
            result *= i; //Por ende, los números que guarde "result" se multiplican por el resultado de la lógica del for, por el cuál pasó "i"
        }
        //Este metodo está dentro de la función que realiza la factorización, es importante su ubicación, ya que si estuviera fuera de la función no me daría el resultado. Notar que se está usando el .querySelector, que es un método más actual, y la class del <p> en el html está ligado a dicha función DOM. El ".textContent" pudo haber sido una opción pero en éste caso, usamos "innerHTLM" para que procese el html y en esa zona me coloque el resultado de la variable "result"
        document.querySelector(".resultado").innerHTML = ("El resultado es, " + result + ".");
    }
}
