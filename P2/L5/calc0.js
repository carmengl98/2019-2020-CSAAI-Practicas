console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//Variable let
let digitos = document.getElementsByClassName("cdigito");

for(i=0; i<digitos.length; i++){
  digitos[i].onclick =(ev) =>{
  digito(ev.target);
  }
}

function digito(boton){
  if(display.innerHTML=="0") {
    display.innerHTML = boton.value;
  }else{
    display.innerHTML += boton.value;
  }
}
// -- Insertar digito 1
// el "1", "2" son un números mágicos y estos si se pueden evitar mejor.
//-- Insertar simbolo de sumar
//inseta lo de js en html ; reemplaza el contenido de <body> por suma.value
suma.onclick = () => {
  display.innerHTML += suma.value;
}

//-- Evaluar la expresion
  //Cuando ponemos ()=>{} eso ya es una funcion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
