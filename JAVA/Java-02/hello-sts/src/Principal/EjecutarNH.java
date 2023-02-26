package Principal;

import java.util.Scanner;

import clases.NuevoHola;

public class EjecutarNH {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sn = new Scanner(System.in);
		
		NuevoHola nh = new NuevoHola("Shelby Sabido");
		nh.saludo();
		
		String nombre;
		System.out.print("Cual es tu nombre: ");
		nombre = sn.nextLine();
		
		NuevoHola nh1 = new NuevoHola(nombre);
		//Con esto lo mando a llamar:
		nh1.saludoConNombre();
	}

}
