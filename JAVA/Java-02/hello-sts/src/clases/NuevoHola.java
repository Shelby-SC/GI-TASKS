package clases;

import java.util.Scanner;

public class NuevoHola {
	
	private String nombre;
	//Javascript: constructor, asi lit lo llamabamos, pero en Java, el constructor se llama exactamente igual a la clase.
	//Este es mi constructor en Java:
	public NuevoHola(String nombre) {
		this.nombre = nombre;
	}
	public void saludo() {
		System.out.println("Hola desde java con sts de nuevo " + this.nombre);
}

public void saludoConNombre() {
	System.out.print("Hola tu eres: " + this.nombre);
	}
}