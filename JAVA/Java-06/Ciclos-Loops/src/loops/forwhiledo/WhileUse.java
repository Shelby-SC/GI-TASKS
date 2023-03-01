package loops.forwhiledo;

import java.util.Scanner;

public class WhileUse {
	Scanner entrada = new Scanner(System.in);
	
	public void cicloW() {
		// TODO Auto-generated method stub
		int iterador = 0;
		while (iterador < 10) {
			System.out.println("iterador: " + iterador);
			iterador += 1;
		}
	}
	
	public void centinelaW() {
		// TODO Auto-generated method stub
		final int centinela = -1; /*Esta variable funciona como de escapa al ciclo while */
		System.out.print("Introduzca una nota: ");
		int nota = entrada.nextInt();
		while (nota != centinela) {
			System.out.println("La nota es: " + nota);
			System.out.print("Introduzca una nota: ");
			nota = entrada.nextInt();
		}
		System.out.println("Fin");
	}
	public void banderaW() {
		boolean valorb = false;
		while (!valorb ) {
			System.out.print("Introduzca un valor numerico");
			int valorx = entrada.nextInt();
			if (valorx >= 0 && valorx <= 5) {
				int potaxio = (int) Math.pow(valorx, 2);
				System.out.println("El resultado es --->" + potaxio);
			} else {
				valorb = true;
				System.out.println("Adios!!");
			}
			
		}
		//Math.pow(2, 2);
		
	}
}
