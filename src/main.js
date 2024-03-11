// import { example } from './dataFunctions.js';
import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// muestra los datos en index
const root = document.getElementById("root");
document.querySelector("main").appendChild(root);
root.appendChild(renderItems(data));

// eventos para select pelaje
const selectPelaje = document.getElementById("pelajeGato");
selectPelaje.addEventListener("change", function() {
  if (selectPelaje.value === "pelo-corto") {
    root.innerHTML = "";
    const peloCorto = filterData(data, "pelajeGato", "Pelo corto");
    root.appendChild(renderItems(peloCorto));
  } else if (selectPelaje.value === "pelo-semilargo") {
    root.innerHTML = "";
    const peloSemilargo = filterData(data, "pelajeGato", "Pelo semilargo");
    root.appendChild(renderItems(peloSemilargo));
  } else if (selectPelaje.value === "pelo-largo") {
    root.innerHTML = "";
    const peloLargo = filterData(data, "pelajeGato", "Pelo largo");
    root.appendChild(renderItems(peloLargo));
  } else if (selectPelaje.value === "sin-pelo") {
    root.innerHTML = "";
    const sinPelo = filterData(data, "pelajeGato", "Sin pelo");
    root.appendChild(renderItems(sinPelo));
  } else {
    root.innerHTML = "";
    root.appendChild(renderItems(data));
  }
});

// const selectPersonalidad = document.getElementById("personalidad");
// selectPersonalidad.addEventListener("change", function() {
//   if (selectPersonalidad.value === "tranquilo") {
//     root.innerHTML = "";
//     const tranquilo = filterData(data, "personalidad", "tranquilo");
//     root.appendChild(renderItems(tranquilo));
//   }
// })

//cambio de la rama feature-newbranchtest