package oop.clases;

public class Fecha {
	private int dia;
	private int mes;
	private int año;
	public int getDia() {
		return dia;
	}
	public void setDia(int dia) {
		this.dia = dia;
	}
	public int getMes() {
		return mes;
	}
	public void setMes(int mes) {
		this.mes = mes;
	}
	public int getAño() {
		return año;
	}
	public void setAño(int año) {
		this.año = año;
	}
	
	//Este es el constructor.
	public Fecha(int dia, int mes, int año) {
		super();
		this.dia = dia;
		this.mes = mes;
		this.año = año;
	}
	
	public Fecha() {
		// TODO Auto-generated constructor stub
	}
	public String diaMesAño() {
		return "La fecha es: -->" + this.dia + "/" + this.mes + "/" + this.año;
		
	}

}
