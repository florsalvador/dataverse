export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  const newUl = document.createElement("ul");
  // crear la etiqueta ul  
  data.forEach(onlyCat => {
    const newLi = document.createElement("li"); // crear la etiqueta li para un gato
    newLi.classList.add("tarjeta"); // agrega la clase "tarjeta" al li
    newLi.setAttribute("itemscope", true);
    newLi.setAttribute("itemtype", "RazasDeGatos");

    newLi.innerHTML = `<img src="${onlyCat.imageUrl}" alt="${onlyCat.id}">
    <h2 itemprop=sort-order>${onlyCat.name}</h2>
    <p itemprop="shortDescription" class="descripcion">${onlyCat.shortDescription}</p>
    <hr/>
    <p><span class="datos">✦ Tamaño:</span> <span itemprop="tamanoGato">${onlyCat.facts["tamanoGato"]}</span></p>
    <p><span class="datos">✦ Pelaje:</span> <span itemprop="pelajeGato">${onlyCat.facts["pelajeGato"]}</span></p>
    <p><span class="datos">✦ Esperanza de vida:</span> <span itemprop="esperanzaMax">${onlyCat.facts["esperanzaMax"]} años</span></p>
    <p><span class="datos">✦ Precio:</span> <span itemprop="precioCachorro">${onlyCat.facts["precioCachorro"]} dólares</span></p>`

    newUl.appendChild(newLi); // inserta la etiqueta li en la etiqueta ul
  });
  return newUl;
};