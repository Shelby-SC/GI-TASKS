

package Principal;
import clases.HolaJava;

class EjecutarHolaJava {

	public static void main(String[] ssc) {
		// TODO Auto-generated method stub
		
		// Siguen los 3 pasos de la instancia.
		
		HolaJava objHJ; //1er paso: declaramos la variable del objeto
		objHJ = new HolaJava(); //2do paso: "new" me está dando la memoria para guardar la creacion del objeto objHJ
		objHJ.saludo(); //3er paso: llamar al método.
		
		/*Tambien puedo simplicarlo así:*/
		
		HolaJava objHJ1 = new HolaJava(); 
		objHJ1.saludo();
	}

}
