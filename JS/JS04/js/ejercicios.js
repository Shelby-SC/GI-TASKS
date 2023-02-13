//* EJERCICIO #1 *//

let arrayN = ["Sofia", "David", "Juan"];
console.log(array1);
array1.push("Sara", "Agustin");
console.log(array1);
array1.shift();
console.log(array1)

array1.splice(1, 0, "Renata");

array1.push("Elena");
console.log(array1);

//* EJERCICIO #2 *//

let pattern = "*"
for (i=0;i<=4;i++){
    console.log(pattern)
    pattern = pattern + "*"
}

let xValue = 3;

while (xValue >= 0) {
    console.log(xValue);
    xValue = xValue - 0.5;
}

let odd = 1

while (odd <= 100) {
    console.log(odd);
    odd+=2;
}