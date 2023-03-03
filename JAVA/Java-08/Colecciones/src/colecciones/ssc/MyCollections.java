package colecciones.ssc;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class MyCollections {

    public static void main(String[] args) {
        MyCollections c = new MyCollections();
        imprimir(c.setCollections());
    }

    static void imprimir(Collection<String> coleccion) {
        for (String elem : coleccion) {
            System.out.println(elem);
        }
    }
    
    Set setCollections() {
        Set  miSet = new HashSet();
        miSet.add("uno");
        miSet.add("dos");
        miSet.add("tres");
        miSet.add("cuatro");
        miSet.add("cinco");
        miSet.remove("tres");
        //miSet.clear();
        boolean e = miSet.isEmpty();
        System.out.println("--->" + e);
        
        Object a [] = miSet.toArray();
        for (int i = 0; i < a.length; i++) {
        	System.out.println("Mi arreglito: " + a[i]);
        }
        
        return miSet;
    }
}

	
	/* public List listaCollections() {
		List miLista = new ArrayList();
		miLista.add(1);
		miLista.add(2);
		miLista.add(2);
		
		return miLista;
		
	}
	
	private static void imprimir(Collection collection) {
		for (Object elementos : collection) {
			
		}
	}	
	static void wrapperClass() {
	byte numeroB = 12;
	System.out.println("Tamaño de un byte " + Byte.SIZE);
	System.out.println("Tamaño de un byte " + Byte.MAX_VALUE);
	System.out.println("Tamaño de un byte " + Byte.MIN_VALUE);
	*/
	
	/* short */
	/*
	short numeroB1 = 12;
	System.out.println("Tamaño de un short " + Short.SIZE);
	System.out.println("Tamaño de un short " + Short.MAX_VALUE);
	System.out.println("Tamaño de un short" + Short.MIN_VALUE);
	
	/* Long 
	
	long numeroB2 =12;
	System.out.println("Tamaño de un long " + Long.SIZE);
	System.out.println("Tamaño de un long " + Long.MAX_VALUE);
	System.out.println("Tamaño de un long " + Long.MIN_VALUE);
	
	/* float 
	
	long numeroB3 = 12;
	System.out.println("Tamaño de un Float " + Float.SIZE);
	System.out.println("Tamaño de un Float " + Float.MAX_VALUE);
	System.out.println("Tamaño de un Float " + Float.MIN_VALUE);
	} */
