package testers;

import oop.clases.Persona;

public class TestPersona {
	public static void main(String[] args) {
		Persona p = new Persona();
		p.setName("Maria");
		System.out.println(">>>" + p.getName());
		
		Persona p1 = new Persona("Tata", 90, 1.85, 85.3, "Sagitario");
		System.out.println("--->" + p1.datosPersona());
		p1.datosPersona());
	}
}
