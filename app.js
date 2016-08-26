var opcion = parseInt(prompt("Escoja una de la siguientes opciones: \n" +
	"1. Sumar \n"+
	"2. Restar \n"+
	"3. Multiplicar \n"+
	"4. Dividir \n"+
	"5. Resto \n" +
	"6. Comparacion \n"));

if (opcion <=6){

	var numero1 = parseInt(prompt("Ingresa #1"));
	var numero2 = parseInt(prompt("Ingresa #2"));

	switch (opcion){
		case 1:
			var suma = numero1 + numero2;
			document.write("Resultado de la suma es " +suma);
			break ;
		case 2:
			var resta = numero1 - numero2;
			document.write("Resultado de la resta es "+resta);
			break ;
		case 3:
			var multiplicacion = numero1 * numero2;
			document.write("Resultado de la multiplicacion es "+multiplicacion);
			break ;
		case 4:
			var division = numero1 / numero2;
			document.write("Resultado de la division es "+division);
			break ;	
		case 5:
			var resto = numero1 % numero2;
			document.write("Resultado del resto es "+resto);
			break ;
		case 6:
			if (numero1 > numero2)
				document.write( numero1 + " es mayor que " + numero2);
			else if (numero1 < numero2)
				document.write( numero1 + " es menor que "+ numero2);
			else if (numero1 == numero2)
				document.write( numero1 + " es igual a " + numero2);
			break ;	
	}
} else {
	document.write("Opcion no valida");
}
