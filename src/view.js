export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const newUl = document.createElement("ul");
  // crear la etiqueta ul  
  data.forEach(onlyCat => {
    const newLi = document.createElement("li"); // crear la etiqueta li para un gato
    newLi.classList.add("tarjeta"); // agrega la clase "tarjeta" al li

    newLi.innerHTML = `<div itemscope itemtype="RazasDeGatos">
    <img src="${onlyCat.imageUrl}" alt="${onlyCat.id}">
    <h2 itemprop="name">${onlyCat.name}</h2>
    <p itemprop="shortDescription">${onlyCat.shortDescription}</p>
    <p>Tamaño: <span itemprop="tamanoGato">${onlyCat.facts["tamanoGato"]}</span></p>
    <p>Pelaje: <span itemprop="pelajeGato">${onlyCat.facts["pelajeGato"]}</span></p>
    <p>Esperanza de vida: <span itemprop="esperanzaMax">${onlyCat.facts["esperanzaMax"]}</span></p>
    <p>Precio: <span itemprop="precioCachorro">${onlyCat.facts["precioCachorro"]}</span></p>
    <div class="divBoton"><button id="ver-mas" class="botonVer">Ver más</button></div>
  </div>`

    newUl.appendChild(newLi); // inserta la etiqueta li en la etiqueta ul
  });
  return newUl;
};