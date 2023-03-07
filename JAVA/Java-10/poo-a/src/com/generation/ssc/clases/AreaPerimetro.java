package com.generation.ssc.clases;

public class AreaPerimetro {
	
	public double area(double lado) {
		double area = lado * lado;
		return area;
	}
	public double perimetro(double lado) {
		double perimetro = lado * 4;
		return perimetro;
	}
	
	public double areaTriangulo(int base, int altura) {
		return (base * altura) /2;
	}
	
	public double perimetroTriangulo(double ladoA, double ladoB, double ladoC) {
		return (ladoA + ladoB + ladoC);

	}
	
	//Circulo
	public double areaCirculo(double PI, double radio) { 
		return PI * Math.pow(radio, 2);
	}
		

	}

