// import { example } from './dataFunctions.js';
import { filterData, sortDataPrice } from './dataFunctions.js';
import { filterDataObj } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';


const conteo = document.getElementById("conteo");

// muestra los datos en index
const root = document.querySelector("#root");
document.querySelector("main").appendChild(root);
root.appendChild(renderItems(data));

function filtrarPelaje (data , pelajeSelec) {
  let gatosFiltrados = data;

  if (pelajeSelec  === "pelo-corto") {
    gatosFiltrados = filterData(data, "pelajeGato", "Pelo corto");
  } else if (pelajeSelec === "pelo-semilargo") {
    gatosFiltrados = filterData(data, "pelajeGato", "Pelo semilargo");
  } else if (pelajeSelec  === "pelo-largo") {
    gatosFiltrados = filterData(data, "pelajeGato", "Pelo largo");
  } else if (pelajeSelec  === "sin-pelo") {
    gatosFiltrados = filterData(data, "pelajeGato", "Sin pelo");
  }

  return gatosFiltrados;
}

function filtrarPersonalidad (data, personalidadSelec) {
  let gatosFiltrados = data;

  if (personalidadSelec === "tranquilo") {
    gatosFiltrados  = filterDataObj(data, "personalidad", "tranquilo");
  } else if (personalidadSelec === "carinoso") {
    gatosFiltrados  = filterDataObj(data, "personalidad", "carinoso");
  } else if (personalidadSelec === "sociable") {
    gatosFiltrados  = filterDataObj(data, "personalidad", "sociable");
  } else if (personalidadSelec === "energico") {
    gatosFiltrados  = filterDataObj(data, "personalidad", "energico");
  } else if (personalidadSelec === "jugueton") {
    gatosFiltrados  = filterDataObj(data, "personalidad", "jugueton");
  } 

  return gatosFiltrados;
}

function ordenarAlfabeto(data, ordenSelec) {
  let gatosOrdenados = data;

  if (ordenSelec === "A-Z")  {
    gatosOrdenados = sortData(data, "id", "asc");
  } else if (ordenSelec === "Z-A") {
    gatosOrdenados = sortData(data, "id", "desc"); 
  } else if (ordenSelec === "precio-asc") {
    gatosOrdenados = sortDataPrice(data, "precioCachorro", "asc"); 
  }else if (ordenSelec === "precio-desc") {
    gatosOrdenados = sortDataPrice(data, "precioCachorro", "desc"); 
  }

  return gatosOrdenados;
}


// evento para select pelaje
const selectPelaje = document.querySelector("#pelajeGato");
selectPelaje.addEventListener("change", function (evento) { // event: la informacion del evento, cuando haces un cambio viaja la informacion de que has seleccionado o que has seleccionado previamente
  const pelajeSelec = evento.target.value; //con el .value se obtiene el value del option cuando tu lo seleccionas en la pag
  const personalidadSelec = document.querySelector("#personalidad").value;
  const ordenSelec = document.querySelector("#orden").value;// el valor de cuando selecciono el orden
  
  //insertar las funciones
  const gatosFiltradosPelaje = filtrarPelaje(data, pelajeSelec);
  const gatosFiltradosPelajePersonalidad = filtrarPersonalidad(gatosFiltradosPelaje, personalidadSelec);
  const gatosFiltradosOrdenados = ordenarAlfabeto(gatosFiltradosPelajePersonalidad, ordenSelec)//si no esta seleccionado el select entonces la funcion retorna gatos filtrados

  root.innerHTML = "";
  root.appendChild(renderItems(gatosFiltradosOrdenados));
  conteo.textContent = "Cantidad: " + gatosFiltradosOrdenados.length;//muestra la cantidad

});


// evento para select personalidad
const selectPersonalidad = document.querySelector("#personalidad");
selectPersonalidad.addEventListener("change", function (evento) {
  const personalidadSelec = evento.target.value; //con el .value se obtiene el value del option cuando tu lo seleccionas en la pag
  const pelajeSelec = document.querySelector("#pelajeGato").value;
  const ordenSelec = document.querySelector("#orden").value;// el valor de cuando selecciono el orden

  //insertar las funciones
  const gatosFiltradosPelaje = filtrarPelaje(data, pelajeSelec);
  const gatosFiltradosPelajePersonalidad = filtrarPersonalidad(gatosFiltradosPelaje, personalidadSelec);
  const gatosFiltradosOrdenados = ordenarAlfabeto(gatosFiltradosPelajePersonalidad, ordenSelec);

  root.innerHTML = "";
  root.appendChild(renderItems(gatosFiltradosOrdenados));
  conteo.textContent = "Cantidad: " + gatosFiltradosOrdenados.length;//muestra la cantidad
});

// evento para ordenar de az o por precio
const ordenar = document.querySelector("#orden");
ordenar.addEventListener("change", function (evento) {
  const ordenSelec = evento.target.value;
  const pelajeSelec = document.querySelector("#pelajeGato").value;
  const personalidadSelec = document.querySelector("#personalidad").value;

  //insertar las funciones
  const gatosFiltradosPelaje = filtrarPelaje(data, pelajeSelec);
  const gatosFiltradosPelajePersonalidad = filtrarPersonalidad(gatosFiltradosPelaje, personalidadSelec);
  const gatosFiltradosOrdenados = ordenarAlfabeto(gatosFiltradosPelajePersonalidad, ordenSelec);

  root.innerHTML = "";
  root.appendChild(renderItems(gatosFiltradosOrdenados));
  conteo.textContent = "Cantidad: " + gatosFiltradosOrdenados.length;//muestra la cantidad
});



// Al cargar la página, establecer el valor del select pelaje como "todos"
window.addEventListener("load", function () {
  selectPelaje.value = "todos";
  selectPersonalidad.value = "todos";
  ordenar.value = "sin-orden";
});


//Funcionalidad de los botones ver mas
let botonesVer= [];
botonesVer = document.querySelectorAll(".tarjeta");

for (let i = 0; i < data.length; i++) {
  botonesVer[i].addEventListener("click", function () {
    sessionStorage.setItem("gatito", JSON.stringify(data[i]));
    //console.log(JSON.stringify(data[i]));
    window.location.href = "gato.html";
  });
}



