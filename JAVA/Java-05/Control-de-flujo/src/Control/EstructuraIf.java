package Control;

import java.util.Scanner;

public class EstructuraIf {
	Scanner entrada = new Scanner(System.in);
	public void controlif() {
		// TODO Auto-generated method stub
		/*
		if (condition) {
			
		} */
		
		long nota = 6;
		if (nota > 5) {
			System.out.println("Nota aprobada " + nota);
		} 
		System.out.println("Continua el control...");
		
		
		if (nota >= 5) {
			System.out.println("Nota aprobatoria es: " + nota);
		} else {
			System.out.println("Nota no aprobada: " + nota);
		}
	} 
	public void divisible() {
		System.out.println("introduzca un valor: ");
		int dato1 = entrada.nextInt();
		System.out.println("introduzca un segundo dato");
		int dato2 = entrada.nextInt();
		if (dato1 % dato2 == 0) {
			System.out.println(dato1 + " es divisible entre " + dato2);
		} else {
			System.out.println(dato1 + "No es divisible entre " + dato2);
		}
	}
	public void compara() {
		System.out.println("Introduzca el primer valor: ");
		int num1 = entrada.nextInt();
		System.out.println("Introduzca el segundo valor: ");
		int num2 = entrada.nextInt();
		if (num1 == num2) {
			System.out.println(num1 + " y " + num2 + "son iguales");
		} else if (num1 > num2) {
			System.out.println("los valores no son iguales " + num1 + " es mayor que " + num2);
		} else if (num1 < num2) {
			System.out.println("No son iguales, " + num2 + "es mayor");
		} else {
			System.out.println("Esperando valores");
		}
	}
		public void anidado() {
			System.out.println("Introduzca un numero: ");
			int valor1 = entrada.nextInt();
			if (valor1 > 0) {
				System.out.println("El numero ingresado es positivo");
			} else if (valor1 < 0) {
				System.out.println("El numero ingresado es negativo");
			} else if (valor1 == 0) {
				System.out.println("El numero ingresado es neutro");
			} else {
				System.out.println("Intente de nuevo");
			}
	}
}

