package ManejoExcepciones;

import java.util.Scanner;

public class NoComprobadasExcepcion {
public static void main(String[] args) {
	Scanner dato = new Scanner(System.in);
	System.out.println("Introduzca un valor: ");
	int divisor;
	
	
	try {
		divisor= Integer.parseInt(dato.next());
		int division = 10/divisor;
		System.out.println("--->" + division);
	}catch(ArithmeticException e) {
		System.out.println("Capturando la exception" + e.getMessage());
	}catch(NumberFormatException nfe) {
		System.out.println("el dato es un caracter");
	}
	System.out.println("Continuamos con el flujo de la aplicación");
}
}
