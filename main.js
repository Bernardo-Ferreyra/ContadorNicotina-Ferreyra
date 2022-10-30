//CREAR UN ALGORITMO CON UN CONDICIONAL

//CREAR UN ALGORITMO USANDO UN CICLO

// PEDIR NOMBRE - PEDIR DATOS Y VALIDAR

//desde que año fumas
//cuantos por dia
// precio del paquete de 20

// mostrar años- cantidad de cigarros acumulados -dinero acumulado

let nombre = prompt("Hola, ingresa tu nombre")
validar();

function validar() {
  let validacion = prompt(`Bienvenido ${nombre} , es usted fumador? SI - NO`).toLocaleLowerCase()
  if(validacion == "si"){
    alert("A continuacion te pediremos algunos datos para determinar tus estadisticas de nicotina")
    validarEdad()
  }
  else if (validacion == "no"){
    alert("Gracias por contestar, esta aplicacion es solo para fumadores")
    nombre = prompt("Hola, ingresa tu nombre")
    validar()
  }
  else{
    alert("Ingresa una opcion valida!")
    validar()
  }  
};

function validarEdad(){
  let edad = parseInt(prompt("Ingresa tu edad porfavor"))
  if (edad < 18){
    alert("Gracias por contestar, no tenes edad para fumar")
    nombre=prompt("Hola, ingresa tu nombre")
    validar()
  }
  else if(edad >= 18 && edad < 100){
    alert("Empecemos! hace click en el boton abajo!")
  }
  else{
    alert("ingresa una opcion valida!")
    validarEdad()
  }
};


function correr() {
  let anioInicial = parseInt(prompt("desde que año fumas?"))
  while (anioInicial > 2022 || anioInicial< 1900 || isNaN(anioInicial) === true){
    alert("Ingresa un año valido")
    anioInicial = parseInt(prompt("desde que año fumas?"))
  }
  let cantidadAnual =parseInt(prompt("cuantos cigarrillos fumas por dia?")) * 365;
  while(isNaN(cantidadAnual) === true){
    alert("Ingresa un numero valido")
    cantidadAnual =parseInt(prompt("cuantos cigarrillos fumas por dia?")) * 365
  }
  let precioUnidad = parseInt(prompt("cuanto sale el paquete de 20?")) / 20;
  while(isNaN(precioUnidad) === true){
    alert("Ingresa un numero valido")
    precioUnidad = parseInt(prompt("cuanto sale el paquete de 20?")) / 20;
  }
  
  let precioAnual = precioUnidad * cantidadAnual;
  let acumuladorNicotina = 0;
  let acumuladorPrecio = 0;


  for (let i = anioInicial; i <= 2022; i++) {
    acumuladorNicotina = acumuladorNicotina + cantidadAnual;
    acumuladorPrecio = acumuladorPrecio + precioAnual;
    document.write(i +" cigarrillos acumulados: " +acumuladorNicotina +
    " dinero acumulado: " +acumuladorPrecio.toFixed(2) +"$" +"<br>" +"<br>");
  }

  alert(`${nombre}, los resultados a continuacion son un promedio de la cantidad y 
  el dinero acumulado desde que fumas!`)
  
};
