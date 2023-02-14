
function helloName() {
    let name = prompt("¿Cuál es tu nombre?");
    if (name != null) {
        document.getElementById("textNombre").innerHTML= 
        "Hello " + name + " ¿Como estás?"
    }     
}