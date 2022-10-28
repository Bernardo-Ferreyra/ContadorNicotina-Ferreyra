//CREAR UN ALGORITMO CON UN CONDICIONAL

//CREAR UN ALGORITMO USANDO UN CICLO

// PEDIR NOMBRE - SALUDAR Y PEDIR DATOS

//desde que año fumas
//cuantos por dia
// precio del paquete de 20

// mostrar años- cantidad de cigarros acumulados -dinero acumulado





function correr(){
    let nombre= prompt('Hola, ingresa tu nombre');
    alert(`Bienvenido ${nombre} esto es un contador de nicotina`);
    let edad= parseInt(prompt('ingresa tu edad porfavor'));

    if (edad < 18){
        alert('no tenes edad para fumar');
        correr();
    }
    else{
        alert('a continuacion te pediremos algunos datos basicos')
    }

    let añoInicial= parseInt(prompt('desde que año fumas?'));
    let cantidadAnual= parseInt(prompt('cuantos cigarrillos fumas por dia?')) * 365;
    let precioUnidad= Number(prompt('cuanto sale el paquete de 20?'))/ 20;
    let precioAnual= precioUnidad*cantidadAnual

    let acumuladorNicotina=0;
    let acumuladorPrecio=0;

    for (let i = añoInicial ; i <= 2022; i++){
        acumuladorNicotina= acumuladorNicotina+cantidadAnual;
        acumuladorPrecio= acumuladorPrecio+precioAnual;

        document.write(i +" cigarrillos acumulados: " + acumuladorNicotina + " dinero acumulado: " + acumuladorPrecio.toFixed(2)+"$" +"<br>"+"<br>");
       
    }

    alert(`${nombre}, estos son tus resultados!`)

};


