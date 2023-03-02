package colecciones.ssc;

import java.sql.Wrapper;
import java.util.ArrayList;
import java.util.List;

public class MyCollections {

	public static void main(String[] args) {
		wrapperClass();
	}
	
	public void listasCollections() {
		List miLista = new ArrayList();
		
	}
	
	static void wrapperClass() {
	byte numeroB = 12;
	System.out.println("Tamaño de un byte " + Byte.SIZE);
	System.out.println("Tamaño de un byte " + Byte.MAX_VALUE);
	System.out.println("Tamaño de un byte " + Byte.MIN_VALUE);
	
	/* short */
	
	short numeroB1 = 12;
	System.out.println("Tamaño de un short " + Short.SIZE);
	System.out.println("Tamaño de un short " + Short.MAX_VALUE);
	System.out.println("Tamaño de un short" + Short.MIN_VALUE);
	
	/* Long */
	
	long numeroB2 =12;
	System.out.println("Tamaño de un long " + Long.SIZE);
	System.out.println("Tamaño de un long " + Long.MAX_VALUE);
	System.out.println("Tamaño de un long " + Long.MIN_VALUE);
	
	/* float */ 
	
	long numeroB3 = 12;
	System.out.println("Tamaño de un Float " + Float.SIZE);
	System.out.println("Tamaño de un Float " + Float.MAX_VALUE);
	System.out.println("Tamaño de un Float " + Float.MIN_VALUE);
	}
}
