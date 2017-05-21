//alert("existe");
function cerrar01 () {
	//alert("Cerrando");
	document.getElementById("01").setAttribute("class", "marco01-a"); 
}

function cerrar02 () {
	//alert("Cerrando");
	document.getElementById("02").setAttribute("class", "marco01-a"); 
}

function cerrar03 () {
	//alert("Cerrando");
	document.getElementById("03").setAttribute("class", "marco01-a"); 
}

function cerrar04 () {
	//alert("Cerrando");
	document.getElementById("04").setAttribute("class", "marco01-a"); 
}

function restaurar() {
	document.getElementById("01").setAttribute("class", "marco");
	document.getElementById("02").setAttribute("class", "marco"); 
	document.getElementById("03").setAttribute("class", "marco"); 
	document.getElementById("04").setAttribute("class", "marco"); 

}

function origen () {
	//alert("origen");
	var elemento = document.getElementById("parrafo01");
  	if (elemento.style.visibility != 'hidden'){
		elemento.style.visibility = 'hidden';
	} else {
  		elemento.style.visibility = 'visible';
  	}
	//document.getElementById("parrafo01").setAttribute("class", "parrafo01-a"); 
}

function extincion() {
	//alert("extincion");
	var elemento = document.getElementById("parrafo02");
  	if (elemento.style.visibility != 'hidden'){
		elemento.style.visibility = 'hidden';
	} else {
  		elemento.style.visibility = 'visible';
  	}
	//document.getElementById("parrafo02").setAttribute("class", "parrafo02-a"); 
}
