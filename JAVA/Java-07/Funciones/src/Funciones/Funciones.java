package Funciones;

public class Funciones { //Esta es la clase, llamada "Funciones"

	//Las funciones se puden declarar en cualquier lugar de la clase.
	/*Nota: fijate que aqui estamos especificando el tipo de dato (int sumar) eso es porque este tipo de funcion es del tipo que SI retornará valores.*/
    public static int sumar (int num1, int num2) {
        int resultado = num1 + num2;
        return resultado;
    }//Cierre de sumar
    
    
    public static int resta (int num1, int num2) {
    	int resultado = num1 - num2;
    	return resultado;
	}//Cierre de resta.
    
    
    public static int multiplicacion (int num1, int num2) {
    	int resultado = num1 * num2;
    	return resultado;
	}//Cierre de multiplicación
    
    public static int division (int num1, int num2) {
    	int resultado = num1 / num2;
    	return resultado;
	}//Cierre de division
    
    public static  name() {
		
	}
    
	
    //Funcion pra imprimir astericos. 
    /*Y en cambio, este tipo de funcion es del tipo que NO retorna valores, asi que no se tiene que especificar el tipo de dato*/
    public static void imprimirAsteriscos() {
    	System.out.println("**********");
		
	}//Cierre de imprimir asteriscos
	
	
	//Este es el método. Tiene como función ejecutar cosas.
	public static void main(String[] args) {

		//Las invocaciones de la funcion se hacen generalmente dentro del metodo principal o main.
		System.out.println("El resultado de la suma es: " + sumar(5,8));
		
		
		
	}//Cierre del metodo main.

}//Cierre de clase Funciones.


/*
NOTAS:
 - Sintaxis de las funciones que si retornan valores
    tipoDeRetorno nombreDeLaFuncion(tipoDeDato argumento1, tipoDeDato argumento2, ...) {
  // Cuerpo de la función
}

    - Sintaxis de las funciones que no retornan valores
    palabraReservada nombreDeLaFuncion(){
    //cuerpo de la funcion
     } 
     
 *********** 
Cosas que debemos tomar en cuenta al momento de crear nuestras funciones:
    - Deben de llevar un nombre unico
    - Opcionalmente podran recibir argumentos y devolver el resultado
    - Se debe especificar el tipo de dato que vamos a pasar como argumnto, y el resultado final de nuestra funcion
    - Cuidar el orden en como estamos agregando nuestros parametros o argumentos.
    
 ******************
 Apuntes Felipe para estudiar:
 
 package Funciones;

public class Funciones { //clase llamada Funciones
    
    
    //Las funciones se pueden declarar en cualquier lugar de la clase (si retorna algo)
    public static int sumar (int num1, int num2) {
        int resultado = num1 + num2;
        return resultado;
    }//cierre sumar
    
    
    
    //Funcion para imprimir asteriscos (void)
    public static void imprimirAsteriscos() {
        System.out.println("**********");
    }//cierre imprimirAsteriscos

    
    //Funcion que combina distintos tipos de valores
    public static float sumaDecimal (float valor1, int valor2) {
        int resultadoDecimal = (int) (valor1 + valor2);
        return resultadoDecimal;
    }
    
    
    
    //Este metodo tiene como funcion, ejecutar cosas
    public static void main(String[] args) {

        //Las invocaciones de la funcion se hacen generalmente dentro del metodo principal o main
        System.out.println("El resultado de la suma es: " + sumar(5,8));
        
        imprimirAsteriscos();
        
        System.out.println("El resultado de la suma decimal es: " + sumaDecimal(5.7f, 5));
        
        
        
        
        
    }//cierre de metodo main

}//cierre de clase Funciones


/*

Funciones 

    - No retornan valores: No devuelven nada, no se especifica nada, y no usamos la palabra return.
    
    - Si retornan valores: Se especifica el tipo de dato del argumento, el tipo de valor que regresa y se usa return para esto.


    - Sintaxis de las funciones que si retornan valores
    tipoDeRetorno nombreDeLaFuncion(tipoDeDato argumento1, tipoDeDato argumento2, ...) {
  // Cuerpo de la función
}

    - Sintaxis de las funciones que no retornan valores
    palabraReservada nombreDeLaFuncion(){
    //cuerpo de la funcion
     }
     
     
 */
