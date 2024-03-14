// import { example } from './dataFunctions.js';
import { filterData } from './dataFunctions.js';
import { filterDataObj } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// muestra los datos en index
const root = document.querySelector("#root");
document.querySelector("main").appendChild(root);
root.appendChild(renderItems(data));

// evento para select pelaje
const selectPelaje = document.querySelector("#pelajeGato");
selectPelaje.addEventListener("change", function () {
  root.innerHTML = "";
  selectPersonalidad.selectedIndex = 0; // muestra opción "Todos" en filtro de personalidad
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

// evento para select pelaje con funcion afuera
// const selectPelaje = document.querySelector("#pelajeGato");

// const eventPelaje = () => {
//   root.innerHTML = "";
//   selectPersonalidad.selectedIndex = 0; // muestra opción "Todos" en filtro de personalidad
//   if (selectPelaje.value === "pelo-corto") {
//     const peloCorto = filterData(data, "pelajeGato", "Pelo corto");
//     root.appendChild(renderItems(peloCorto));
//   } else if (selectPelaje.value === "pelo-semilargo") {
//     const peloSemilargo = filterData(data, "pelajeGato", "Pelo semilargo");
//     root.appendChild(renderItems(peloSemilargo));
//   } else if (selectPelaje.value === "pelo-largo") {
//     const peloLargo = filterData(data, "pelajeGato", "Pelo largo");
//     root.appendChild(renderItems(peloLargo));
//   } else if (selectPelaje.value === "sin-pelo") {
//     const sinPelo = filterData(data, "pelajeGato", "Sin pelo");
//     root.appendChild(renderItems(sinPelo));
//   } else {
//     root.appendChild(renderItems(data));
//   }
// }

// selectPelaje.addEventListener("change", eventPelaje);

// const pelajeSelected = 

// evento para select personalidad
const selectPersonalidad = document.querySelector("#personalidad");
selectPersonalidad.addEventListener("change", function () {
  root.innerHTML = "";
  selectPelaje.selectedIndex = 0; // muestra opción "Todos" en filtro de pelaje
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
});

// evento para ordenar de az
const ordenar = document.querySelector("#orden");
ordenar.addEventListener("change", function () {
  root.innerHTML = "";
  if (ordenar.value === "A-Z") {
    const ascendente = sortData(data, "id", "asc");
    root.appendChild(renderItems(ascendente));
  } else if (ordenar.value === "Z-A") {
    const descendente = sortData(data, "id", "desc");
    root.appendChild(renderItems(descendente));
  } 
  // else if (ordenar.value === "sin-orden") {
  //   root.appendChild(renderItems(data));
  // }
});

// evento para ordenar todo
// const ordenar = document.querySelector("#orden");
// ordenar.addEventListener("change", function () {
//   root.innerHTML = "";
//   if (selectPelaje.value !== "todos") {
//     if (ordenar.value === "A-Z") {
//       const ascendente = sortData(filterData(data, "pelajeGato", "Pelo corto"), "id", "asc");
//       root.appendChild(renderItems(ascendente));
//     } else if (ordenar.value === "Z-A") {
//       const descendente = sortData(eventPelaje, "id", "desc");
//       root.appendChild(renderItems(descendente));
//     }
//   } else if (ordenar.value === "A-Z") {
//     const ascendente = sortData(data, "id", "asc");
//     root.appendChild(renderItems(ascendente));
//   } else if (ordenar.value === "Z-A") {
//     const descendente = sortData(data, "id", "desc");
//     root.appendChild(renderItems(descendente));
//   }
// });

// Al cargar la página, establecer el valor del select pelaje como "todos"
window.addEventListener("load", function () {
  selectPelaje.value = "todos";
  selectPersonalidad.value = "todos";
});