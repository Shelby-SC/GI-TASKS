package loops.forwhiledo;

import java.util.Scanner;

public class DoLoop {
	Scanner dato = new Scanner(System.in);
	public void digitosDO() {
		
		int valor = 0;
		int acumulador= 0;
		do {
			System.out.print("Introduzca un dígito entre (0-9)");
			valor = dato.nextInt();
			acumulador = acumulador + valor;
			System.out.println("--->" + acumulador);
			
		} while (valor >= 0 && valor <= 9);	
	System.out.println("Byeeee");
	}
}
