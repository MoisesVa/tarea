
function principal() {
	var a = new Number();
	var b = new Number();
	var aux = new Number();
	document.write("Digite el valor de a: ",'<BR/>');
	a = Number(prompt());
	document.write("digite el valor de b: ",'<BR/>');
	b = Number(prompt());
	aux = a;
	a = b;
	b = aux;
	document.write("El nuevo valor de a es: ",a,'<BR/>');
	document.write("El nuevo vlaor de b es: ",b,'<BR/>');
}

