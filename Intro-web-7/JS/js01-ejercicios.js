
function programa1() {
    let horas = prompt("Ingrese horas trabajadas");
    let costeporhoras = prompt ("Ingrese pago por hora");
    let sueldo = horas * costeporhoras;
    return sueldo;
}

function programa2() {
    let solucion = (3+2)/(2*5);
    alert(solucion);
}

function imc(){
    let peso = parseInt(prompt("Ingrese su peso en libras: "))
    let altura = parseInt(prompt("Ingrese su altura en centimetros: "))
    let pesoKg = peso*0.453592
    let alturaM = altura/100
    let imc = pesoKg/(alturaM*alturaM)
   
    switch(true){
        case imc<16:
            var sit = "criterio de ingreso"
            break;
        case imc>=16 && imc<16.9:
            var sit = "infrapeso"
            break;
        case imc>=17 && imc<18.4:
            var sit = "bajo peso"
            break;
        case imc>=18.5 && imc<24.9:
            var sit = "peso normal"
            break;
        case imc>=25 && imc<29.9:
            var sit = "sobrepeso"
            break;
        case imc>=30 && imc<34.9:
            var sit = "obesidad premórbida"
            break;
        case imc>=40 && imc<45:
            var sit = "obesidad mórbida"
            break;
        case imc>45:
            var sit = "obesidad hipermórbida"
            break;
    }
    alert("El peso es: "+pesoKg+", Su IMC es de: "+imc+
    ", Se encuentra en "+sit)
}