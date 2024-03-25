import { filterData, sortDataPrice, filterDataObj, sortData, computeStats} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// muestra los datos en index
const root = document.querySelector("#root");
root.appendChild(renderItems(data));

// menu responsive
const menuNormal = document.querySelector(".menu-normal"); // div con selects
const menuBoton = document.querySelector(".menu-boton"); // boton menu abrir
const cerrarFiltros  = document.querySelector(".cerrar-filtros"); // boton menu cerrar
menuBoton.addEventListener("click", function() {
  menuBoton.style.display = "none";
  cerrarFiltros.style.display = "block";
  menuNormal.style.display = "flex";
})
cerrarFiltros.addEventListener("click", function() {
  menuBoton.style.display = "block";
  cerrarFiltros.style.display ="none";
  menuNormal.style.display = "none";
})


// FUNCIONES USADAS EN LOS EVENTOS
function filtrarPelaje(data, pelajeSelec) {
  let gatosFiltrados = data;

  if (pelajeSelec === "pelo-corto") {
    gatosFiltrados = filterData(data, "pelajeGato", "Pelo corto");
  } else if (pelajeSelec === "pelo-semilargo") {
    gatosFiltrados = filterData(data, "pelajeGato", "Pelo semilargo");
  } else if (pelajeSelec === "pelo-largo") {
    gatosFiltrados = filterData(data, "pelajeGato", "Pelo largo");
  } else if (pelajeSelec === "sin-pelo") {
    gatosFiltrados = filterData(data, "pelajeGato", "Sin pelo");
  }

  return gatosFiltrados;
}

function filtrarPersonalidad(data, personalidadSelec) {
  let gatosFiltrados = data;

  if (personalidadSelec === "tranquilo") {
    gatosFiltrados = filterDataObj(data, "personalidad", "tranquilo");
  } else if (personalidadSelec === "carinoso") {
    gatosFiltrados = filterDataObj(data, "personalidad", "carinoso");
  } else if (personalidadSelec === "sociable") {
    gatosFiltrados = filterDataObj(data, "personalidad", "sociable");
  } else if (personalidadSelec === "energico") {
    gatosFiltrados = filterDataObj(data, "personalidad", "energico");
  } else if (personalidadSelec === "jugueton") {
    gatosFiltrados = filterDataObj(data, "personalidad", "jugueton");
  }

  return gatosFiltrados;
}

function ordenar(data, ordenSelec) {
  let gatosOrdenados = data;

  if (ordenSelec === "asc")  {
    gatosOrdenados = sortData(data, "name", "asc");
  } else if (ordenSelec === "desc") {
    gatosOrdenados = sortData(data, "name", "desc"); 
  } else if (ordenSelec === "precio-asc") {
    gatosOrdenados = sortDataPrice(data, "precioCachorro", "asc"); 
  }else if (ordenSelec === "precio-desc") {
    gatosOrdenados = sortDataPrice(data, "precioCachorro", "desc"); 
  }

  return gatosOrdenados;
}

//Funcionalidad de tarjeta ver mas
function tarjetasVer (data){
  const botonesVer = document.querySelectorAll("li");

  for (let i = 0; i < data.length; i++) {
    botonesVer[i].addEventListener("click", function () {
      sessionStorage.setItem("gatito", JSON.stringify(data[i]));
      window.location.href = "gato.html";
    });
  }
}
tarjetasVer(data);

// EVENTOS SELECT
const selectPelaje = document.querySelector("#pelajeGato");
const selectPersonalidad = document.querySelector("#personalidad");
const selectOrden = document.querySelector("#orden");
//contador
const conteo = document.getElementById("conteo");

// evento para select pelaje
selectPelaje.addEventListener("change", function (evento) { // event: la informacion del evento, cuando haces un cambio viaja la informacion de que seleccionas o que has seleccionado previamente
  //insertar las funciones
  const gatosFiltradosPelaje = filtrarPelaje(data, evento.target.value);
  const gatosFiltradosPelajePersonalidad = filtrarPersonalidad(gatosFiltradosPelaje, selectPersonalidad.value);
  const gatosFiltradosOrdenados = ordenar(gatosFiltradosPelajePersonalidad, selectOrden.value) //si no esta seleccionado el select entonces la funcion retorna gatos filtrados

  root.innerHTML = "";
  root.appendChild(renderItems(gatosFiltradosOrdenados));
  conteo.textContent = "Cantidad: " + gatosFiltradosOrdenados.length; // contador
  
  tarjetasVer(gatosFiltradosOrdenados);
});


// evento para select personalidad
selectPersonalidad.addEventListener("change", function (evento) {
  // insertar las funciones
  const gatosFiltradosPelaje = filtrarPelaje(data, selectPelaje.value);
  const gatosFiltradosPelajePersonalidad = filtrarPersonalidad(gatosFiltradosPelaje, evento.target.value);
  const gatosFiltradosOrdenados = ordenar(gatosFiltradosPelajePersonalidad, selectOrden.value);

  root.innerHTML = "";
  root.appendChild(renderItems(gatosFiltradosOrdenados));
  conteo.textContent = "Cantidad: " + gatosFiltradosOrdenados.length; // muestra la cantidad

  tarjetasVer(gatosFiltradosOrdenados);
});

// evento para ordenar
selectOrden.addEventListener("change", function (evento) {
  // insertar las funciones
  const gatosFiltradosPelaje = filtrarPelaje(data, selectPelaje.value);
  const gatosFiltradosPelajePersonalidad = filtrarPersonalidad(gatosFiltradosPelaje, selectPersonalidad.value);
  const gatosFiltradosOrdenados = ordenar(gatosFiltradosPelajePersonalidad, evento.target.value);

  root.innerHTML = "";
  root.appendChild(renderItems(gatosFiltradosOrdenados));
  conteo.textContent = "Cantidad: " + gatosFiltradosOrdenados.length;

  tarjetasVer(gatosFiltradosOrdenados);
});

// evento para boton borrar filtros
const botonBorrar = document.getElementById("botonBorrar");
botonBorrar.addEventListener("click", function () {
  root.innerHTML = "";
  root.appendChild(renderItems(data));
  conteo.textContent = "Cantidad: " + data.length;
  selectPelaje.value = "none";
  selectPersonalidad.value = "none";
  selectOrden.value = "sin-orden";

  tarjetasVer(data);
})

//Botón estadísticas
const estadisticasBoton = document.getElementById("stats");
const estadisticasDiv = document.querySelector(".div-estadisticas")
const cerrar = document.querySelector(".boton-cerrar-estadisticas")
estadisticasBoton.addEventListener("click", function() {
  cerrar.style.display = "flex";
  cerrar.style.justifyContent = "flex-end";
  estadisticasDiv.style.display = "flex";
  estadisticasDiv.style.justifyContent = "center"
  //estadisticasDiv.innerHTML = `El precio promedio de cada gato es: ${computeStats(data)} <button class="cerrar-estadisticas"> X </button>`;
  estadisticasDiv.textContent = "El precio promedio de cada gato es: " + computeStats(data);
})
cerrar.addEventListener("click", function() {
  estadisticasDiv.style.display = "none";
  cerrar.style.display = "none";
})

// al cargar la página, establece los valores por defecto
window.addEventListener("load", function () {
  selectPelaje.value = "none";
  selectPersonalidad.value = "none";
  selectOrden.value = "sin-orden";
});