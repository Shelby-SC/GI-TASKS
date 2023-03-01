package ciclos.control;

import java.util.Scanner;

public class DoSwitch {
	public void controlador() {
		Scanner salida = new Scanner(System.in);
		Menus mp = new Menus();		
		int opcion = salida.nextInt();
		do {
			mp.menuPrincipal();
			System.out.print("Introduzca una opcion: ");
			opcion = salida.nextInt();
			switch (opcion) {
			case 1:
				objetoUW.cicloW();
				break;

			default:
				break;
			}
		} while (opcion > 0 && opcion <= 7);

	}

}
