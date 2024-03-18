
let gatito = sessionStorage.getItem("gatito");
gatito = JSON.parse(gatito)
//JSON.stringify(gato);
console.log(JSON.stringify(gatito))

const divGato = document.querySelector(".unicoGato");
divGato.textContent = gatito["facts"]["precioCachorro"];

