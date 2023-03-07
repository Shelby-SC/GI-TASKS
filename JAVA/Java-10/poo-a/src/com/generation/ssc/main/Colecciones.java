package com.generation.ssc.main;

import java.util.ArrayList;
import java.util.List;

public class Colecciones {
	public static void main(String[] args) {
		List <String> coleccion = new ArrayList<String>();
		coleccion.add("colecciones");
		coleccion.add("cohorte");
		
		for (int i = 0; i < coleccion.size(); i++) {
			System.out.println(coleccion.get(i));
		}
	}

}
