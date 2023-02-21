/* Aquí se verá la forma de implementar objetos en Javascript con la forma clásica. Una clase es la asignación de la abstracción */

    class operacionesAritmeticas{ 

        //El constructor no es visible como tal, no se llama ni nada, pero se podría decir que es toda ésta clase.***investigar más.

        numero0 = 0; //No pusimos "let" ni "var" ni "const" debido a que esta es una diferencia entre la forma clásica y de prototipo, no necesitamos designar una variable en la forma tradicional.
        numero1 = 1; //Ya no serían variables sino que serían "propiedades"

        //Aquí definiremos un método. Todos los métodos son acciones y se declaran como si fuera un verbo.
        sumar(a, b){
            return a + b;
        }
    }

    
    /* Esto es una instancia: Cuando defino o creo cada objeto, basado en la clase anteriormente definida */
    //La instancia es:

    /* primer paso: declaracion */ 
    let obj1; //Aquí creamos el objeto, pero aun no decimos que tiene ese objeto.

    /*Segundo paso: creación o asignación: */ 
    obj1 = new operacionesAritmeticas(); //Aquí si le estamos asignando algo al objeto, que en este caso es una abstracción.

    /* Tercer paso: llamar o imprimir */
    console.log(obj1.numero0);

    /*Esta también sería una forma de haber escrito más corto la instancia de arriba: */
    let obj2 = new operacionesAritmeticas();
    console.log(obj2.sumar(5,6));

    /* ****************** CON CONSTRUCTOR ***************** */

    class operacionesAritmeticas{ 

        numero0 = 0; 
        numero1 = 1; 

//Ahora éste constructor SI está declarado
        constructor(valor0, valor1){
            this.numero0 = valor0;
            this.numero1 = valor1;
        }

        sumar(){ //En este caso puedo eliminar los parámetros de aquí
            return this.numero0 + this.numero1; //aquí también cambia a diferencia de cuando no se declara el constructor.
        }
    }
    
    let obj4 = new operacionesAritmeticas(8, 6);
    console.log("---->" + obj4.sumar());


    //¿Qué es un objeto? = Una instancia de una clase, es una construcción abstracta, la instancia es la petición o llamada a una clase.