let gatito = sessionStorage.getItem("gatito");
gatito = JSON.parse(gatito)
//JSON.stringify(gato);
// console.log(JSON.stringify(gatito))

const divGato = document.querySelector(".nombre");
divGato.textContent = gatito.name;

const imagen = document.querySelector(".imagen");
imagen.src = gatito.imageUrl;

const descripcion = document.querySelector(".Descripcion");
descripcion.textContent = gatito.description;

const esperanzaMinima = document.querySelector(".esperanzaMinima");
esperanzaMinima.textContent = gatito["facts"]["esperanzaMin"];

const esperanzaMaxima = document.querySelector(".esperanzaMaxima");
esperanzaMaxima.textContent = gatito["facts"]["esperanzaMax"];

const pesoMinimo = document.querySelector(".pesoMinimo");
pesoMinimo.textContent = gatito["facts"]["pesoMin"];

const pesoMaximo = document.querySelector(".pesoMaximo");
pesoMaximo.textContent = gatito["facts"]["pesoMax"];

const precioCachorro = document.querySelector(".precioCachorro");
precioCachorro.textContent = gatito["facts"]["precioCachorro"];

const tamaño = document.querySelector(".tamanoGato");
tamaño.textContent = gatito["facts"]["tamanoGato"];

const lugar = document.querySelector(".lugarDeOrigen");
lugar.textContent = gatito["facts"]["lugarDeOrigen"];

const pelaje = document.querySelector(".pelajeGato");
pelaje.textContent = gatito["facts"]["pelajeGato"];

const  rasgos = document.querySelector(".rasgosFaciales");
rasgos.textContent = gatito["facts"]["rasgosFaciales"];

/////////////////////////////////////
const  personalidad = document.querySelector(".personalidad");
let personalidadContenido = "";
const pers = ["tranquilo", "carinoso", "sociable", "energico", "jugueton"];
for (let i = 0; i < pers.length; i++) {
  if(gatito["extraInfo"]["personalidad"][pers[i]] === true){
    personalidadContenido = personalidadContenido + pers[i] + ", ";
  }
}
personalidad.textContent = personalidadContenido;
//////////////////////////////////////////

//////////////////////////////////////
const  enfermedadesComunes = document.querySelector(".enfermedadesComunes");
let Contenido = "";
const enfermedades = ["problemasRespiratorios", "problemasDentales", "problemasCardiacos", "problemasDePiel", "problemasRenales", "problemasOculares", "tendenciaObesidad"];

for (let i = 0; i < enfermedades.length; i++) {
  if(gatito["extraInfo"]["enfermedadesComunes"][enfermedades[i]] === true){
    Contenido = Contenido + " " + enfermedades[i] + ", ";
  }
}
enfermedadesComunes.textContent = Contenido;
<<<<<<< HEAD
/////////////////////////////////////
=======
///////////////////////////////////////////////
>>>>>>> 9308a346c918e7289dc567174abdc15ddef0f110

const  cuidados = document.querySelector(".cuidados");
cuidados.textContent = gatito["extraInfo"]["cuidados"];
