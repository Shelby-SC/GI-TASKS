package Control;

	import java.util.Scanner;

import javax.management.ValueExp;

	public class OrdenTres {
		Scanner orden = new Scanner(System.in);
		public void OrdenNum() {
			System.out.print("Introduzca el primer valor: ");
			int valor1 = orden.nextInt();
			System.out.print("Introduzca el segundo valor: ");
			int valor2 = orden.nextInt();
			System.out.print("Introduzca el tercer valor: ");
			int valor3 = orden.nextInt();
			
			
			/*Aquí va el bloque mayor a menor */
			if (valor1 >= valor2 && valor2 >= valor3) {
				System.out.println(valor1 + " " + valor2 + " " + valor3);	
			} else if (valor1 >= valor3 && valor3 >= valor2) {
				System.out.println(valor1 + " " + valor3 + " " + valor2);
			} else if (valor2 >= valor1 && valor1 >= valor3) {
				System.out.println(valor2 + " " + valor1 + " " + valor3);
			} else if (valor2 >= valor3 && valor3 >= valor1) {
				System.out.println(valor2 + " " + valor3 + " " + valor1);	
			} else if (valor3 >= valor1 && valor1 >= valor2) {
				System.out.println(valor3 + " " + valor1 + " " + valor2);
			} else if (valor3 >= valor2 && valor2 >= valor1) {
				System.out.println(valor3 + " " + valor2 + " " + valor1);	
			}
			
			
			/*Aquí va el bloque de menor a mayor */
			if (valor1 <= valor2 && valor2 <= valor3) {
				System.out.println(valor1 + " " + valor2 + " " + valor3);	
			} else if (valor1 <= valor3 && valor3 <= valor2) {
				System.out.println(valor1 + " " + valor3 + " " + valor2);
			} else if (valor2 <= valor1 && valor1 <= valor3) {
				System.out.println(valor2 + " " + valor1 + " " + valor3);
			} else if (valor2 <= valor3 && valor3 <= valor1) {
				System.out.println(valor2 + " " + valor3 + " " + valor1);	
			} else if (valor3 <= valor1 && valor1 <= valor2) {
				System.out.println(valor3 + " " + valor1 + " " + valor2);
			} else if (valor3 <= valor2 && valor2 <= valor1) {
				System.out.println(valor3 + " " + valor2 + " " + valor1);			
			}	
		}
	}

