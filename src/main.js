// import { example } from './dataFunctions.js';
import { filterData } from './dataFunctions.js';
import { filterDataObj } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// muestra los datos en index
const root = document.getElementById("root");
document.querySelector("main").appendChild(root);
root.appendChild(renderItems(data));

// evento para select pelaje
const selectPelaje = document.getElementById("pelajeGato");
selectPelaje.addEventListener("change", function() {

  root.innerHTML = "";

  if (selectPelaje.value === "pelo-corto") {

    const peloCorto = filterData(data, "pelajeGato", "Pelo corto");
    root.appendChild(renderItems(peloCorto));
  } else if (selectPelaje.value === "pelo-semilargo") {
  
    const peloSemilargo = filterData(data, "pelajeGato", "Pelo semilargo");
    root.appendChild(renderItems(peloSemilargo));
  } else if (selectPelaje.value === "pelo-largo") {
    
    const peloLargo = filterData(data, "pelajeGato", "Pelo largo");
    root.appendChild(renderItems(peloLargo));
  } else if (selectPelaje.value === "sin-pelo") {
    
    const sinPelo = filterData(data, "pelajeGato", "Sin pelo");
    root.appendChild(renderItems(sinPelo));
  } else {
    
    root.appendChild(renderItems(data));
  }
});

// evento para select personalidad
const selectPersonalidad = document.getElementById("personalidad");
selectPersonalidad.addEventListener("change", function() {

  root.innerHTML = "";

  if (selectPersonalidad.value === "tranquilo") {
    
    const tranquilo = filterDataObj(data, "personalidad", "tranquilo");
    root.appendChild(renderItems(tranquilo));
  } else if (selectPersonalidad.value === "carinoso") {
    
    const carinoso = filterDataObj(data, "personalidad", "carinoso");
    root.appendChild(renderItems(carinoso));
  } else if (selectPersonalidad.value === "sociable") {
    
    const sociable = filterDataObj(data, "personalidad", "sociable");
    root.appendChild(renderItems(sociable));
  } else if (selectPersonalidad.value === "energico") {
    
    const energico = filterDataObj(data, "personalidad", "energico");
    root.appendChild(renderItems(energico));
  } else if (selectPersonalidad.value === "jugueton") {
    
    const jugueton = filterDataObj(data, "personalidad", "jugueton");
    root.appendChild(renderItems(jugueton));
  } else {
    
    root.appendChild(renderItems(data));
  }
})

// evento para ordenar de az
const ordenar = document.getElementById("orden");
ordenar.addEventListener("change", function() {

  root.innerHTML = "";

  if (ordenar.value === "A-Z") {
    
    const ascendente = sortData(data, "id", "asc");
    root.appendChild(renderItems(ascendente));
  } else if (ordenar.value === "Z-A") {
    
    const descendente = sortData(data, "id", "desc");
    root.appendChild(renderItems(descendente));
  
  } 
});

//para precio cachorro cambiar "id" por "precioCachorro"

//console.log(sortData(data,"precioCachorro","asc"));