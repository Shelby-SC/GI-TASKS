package com.generation.ssc.main;

import com.generation.ssc.clases.Taco;

public class TestTaco {

	public static void main(String[] args) {
		Taco t = new Taco();
		
		t.setGuisado("chicharron prensado");
		t.setNumTortilla(3);
		t.setTipoTortilla("maiz");
		t.setPrecio(35);
		t.setSizeTortilla("grande");
		
		System.out.println("Una orden de tacos: " + t.getGuisado() + " con tortilla de " + t.getTipoTortilla() + " tamaño " + t.getSizeTortilla() + " con " + t.getNumTortilla() + " piezas, a solo: " + t.getPrecio() );
		
		Taco t2 = new Taco("harina", "asado", 4, "mediano", 25);
		System.out.println(t2.toString());

	}

}
