package com.generation.ssc.main;

import com.generation.ssc.clases.AreaPerimetro;
import com.generation.ssc.clases.FigurasGeometricas;

public class TestAreaPerimetro {

	public static void main(String[] args) {
		AreaPerimetro ap = new AreaPerimetro();
		FigurasGeometricas fg = new FigurasGeometricas();
		
		fg.setArea((ap.area(5)));
		System.out.println("Area de Cuadrado---> " + fg.getArea());
		
		fg.setPerimetro(ap.perimetroTriangulo(3, 5, 1));
		System.out.println("Perimetro del cuadrado--> " + fg.getPerimetro());
		
		fg.setArea((ap.areaCirculo(2, 3)));
		System.out.println("Area de circulo--> " + fg.getArea);
		
	}

}
