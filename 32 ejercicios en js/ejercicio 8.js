
function principal() {
	var pi;
	var radio = new Number();
	var area = new Number();
	var lon = new Number();
	document.write("Digite el valor del radio:",'<BR/>');
	radio = Number(prompt());
	area = Math.PI*Math.pow(radio,2);
	lon = 2*Math.PI*radio;
	document.write("El area de la circunferencia es: ",area,'<BR/>');
	document.write("la longitud es: ",lon,'<BR/>');
}

