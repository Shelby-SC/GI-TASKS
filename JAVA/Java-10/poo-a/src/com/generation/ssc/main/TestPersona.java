package com.generation.ssc.main;

import com.generation.ssc.clases.Persona;

public class TestPersona {
	public static void main(String[] args) {
		Persona persona = new Persona();
		persona.setNombre("Melina");
		System.out.println("---> " + persona.getNombre());
	}

}
