
/* INICIO DEL CÓDIGO */
//Se declara la variable que contendrá un valor random matemático:
let secreto = Math.floor(Math.random()*100)
console.log(secreto);

//Paso 2: Se declara la clase, usando el diseño de orientación a objetos:
class User {
    constructor(nombre, intentos){
        this.nombre=nombre
        this.intentos=intentos
    }
}
    
let name=prompt("ingresa tu nombre");
let player=new User (name,0)

let ingresados=[]
function guessNumber() {
        let mensaje;
        let userNumber = Number(document.getElementById("userNum").value);
        if(isNaN(userNumber)){
            alert("Ups! parece que el dato ingresado no es un número; intente de nuevo por favor");
        } else if (userNumber > 100 || userNumber < 0) {
            mensaje ="Espera! el número en mi mente esta entre 1 y 100!";
            player.intentos+=1;
        } else if (userNumber !== secreto) {
            mensaje = 
            userNumber > secreto 
            ? "¡Estás cerca! pista: un poco más abajo"
            : "Un poco más arriba!";
            player.intentos+=1;
            ingresados.push(userNumber);

        } else {
            mensaje="¡Braaaavo! ¡Acertaste!"; 
            secreto=Math.floor(Math.random()*100);
            player.intentos+=1;
            if (localStorage.getItem(name)!=null) {
                if (localStorage.getItem(name) > player.intentos) {
                    alert("Has mejorado");
                    localStorage.setItem(`${player.nombre}`, player.intentos);
                }
            } else {
                alert("Mas practica");
                (localStorage.setItem(`${player.nombre}` ,player.intentos));
            }
        

        setTimeout(() => {
        document.getElementById("mensaje").innerHTML="";
        document.getElementById("intentos").innerHTML="0";
        ingresados=[];
        document.getElementById("ingresados").innerHTML=ingresados.toString();
    }, 5000);

}
    document.getElementById("mensaje").innerHTML = mensaje;
    document.getElementById('intentos').innerHTML = `Intentos: ${player.intentos}`;
    document.getElementById('ingresados').innerHTML = `Ingresaste los siguientes numeros: ${ingresados.toString()}`;
}

document.querySelector(".buttonNum").addEventListener("click", guessNumber)