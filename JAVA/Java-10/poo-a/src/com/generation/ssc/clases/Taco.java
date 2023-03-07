package com.generation.ssc.clases;

public class Taco {
	private String tipoTortilla;
	private String guisado;
	private int numTortilla;
	private String sizeTortilla;
	private float precio;
	
	//Constructor vacio
	public Taco() {
		
	} //cierre
	
	//Constructor sobrecargado
	public Taco(String tipoTortilla, String guisado, int numTortilla, String sizeTortilla, float precio) {
		super();
		this.tipoTortilla = tipoTortilla;
		this.guisado = guisado;
		this.numTortilla = numTortilla;
		this.sizeTortilla = sizeTortilla;
		this.precio = precio;
	}
	
	
	
	//Constructores get y set
	public String getTipoTortilla() {
		return tipoTortilla;
	}
	

	public void setTipoTortilla(String tipoTortilla) {
		this.tipoTortilla = tipoTortilla;
	}
	
	public String getGuisado() {
		return guisado;
	}
	
	public void setGuisado(String guisado) {
		this.guisado = guisado;
	}
	
	public int getNumTortilla() {
		return numTortilla;
	}
	
	public void setNumTortilla(int numTortilla) {
		this.numTortilla = numTortilla;
	}
	
	public String getSizeTortilla() {
		return sizeTortilla;
	}
	
	public void setSizeTortilla(String sizeTortilla) {
		this.sizeTortilla = sizeTortilla;
	}
	
	public float getPrecio() {
		return precio;
	}
	
	public void setPrecio(float precio) {
		this.precio = precio;
	} //cierre
	

	
	/* Metodo toString */
	@Override
	public String toString() {
		return "Taco [tipoTortilla=" + tipoTortilla + ", guisado=" + guisado + ", numTortilla=" + numTortilla
				+ ", sizeTortilla=" + sizeTortilla + ", precio=" + precio + "]";
	}



}
