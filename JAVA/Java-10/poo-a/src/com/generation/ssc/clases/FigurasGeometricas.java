package com.generation.ssc.clases;

public class FigurasGeometricas {
	private double perimetro;
	private double area;
	
	//Este es el constructor vacio
	public FigurasGeometricas() {

	}//Cierre
	
	//Constructor 
	public FigurasGeometricas(double perimetro, double area) {
		this.perimetro = perimetro;
		this.area = area;
	}//Cierre

	//Constructor Get&Set
	public double getPerimetro() {
		return perimetro;
	}

	public void setPerimetro(double perimetro) {
		this.perimetro = perimetro;
	}

	public double getArea() {
		return area;
	}

	public void setArea(double area) {
		this.area = area;
	}//Cierre

}
