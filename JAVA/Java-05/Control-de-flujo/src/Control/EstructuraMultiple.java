package Control;

import java.io.NotActiveException;
import java.util.Scanner;

public class EstructuraMultiple {
//A la estuctura multiple se le conoce como el switch. Es una estructura de control de flujo que nos permitirá realizar condiciones.
	Scanner dato = new Scanner(System.in);

	public void vocal() {
		System.out.println("Introduzca una letra");
		char letra = dato.next().charAt(0);
		switch (letra) {
		case 'a':
		case 'e':
		case 'i':
		case 'o':
		case 'u':
		case 'A':
		case 'E':
		case 'I':
		case 'O':
		case 'U':
			System.out.println(" Es vocal ");
			break;

		default:
			System.out.println("El caracter no es vocal");
			break;
		}
	}

	public void notas() {
		System.out.println("Introduzca una nota: ");
		int nota = dato.nextInt();
		switch (nota) {
		case 10:
			System.out.println("Superior");
			break;
		case 9:
			System.out.println("Excelente");
			break;
		case 8:
			System.out.println("Muy bueno");
			break;
		case 7:
			System.out.println("Regular");
			break;
		case 6:
			System.out.println("Deficiente");
			break;
		case 5:
		case 4:
		case 3:
		case 2:
		case 1:
		case 0:
			System.out.println("Reprobado");
			break;

		default:
			System.out.println("La nota está fuera de rango");
			break;
		}
	}

	public void ternario() {
		// TODO Auto-generated method stub
		System.out.print("Ingrese primer valor numerico: ");
		int entradaV = dato.nextInt();
		System.out.print("Ingrese segundo valor numérico: ");
		int entradaF = dato.nextInt();
		int menor = (entradaV <= entradaF) ? entradaV:entradaF;
		System.out.println(menor);
	}
}
