/*
export const filterData = (data, filterBy, value) => {
  const dataFiltered = data.filter(cat => {
    if (cat["facts"][filterBy] === value) {
      return cat;
    } else if (cat["extraInfo"][filterBy] && cat["extraInfo"][filterBy][value]) {
      return cat;
    }

  });
  return dataFiltered;
};
*/


export const filterData = (data, filterBy, value) => {
  return data.filter(cat => cat["facts"][filterBy] === value)
};


export const filterData2 = (data, filterBy, value) => {
  return data.filter(cat => cat["extraInfo"][filterBy][value]) 
};





//----------------------------------

// FUNCION FILTERDATA PELAJE Y PERSONALIDAD USANDO OR PERO NO FUNCIONA
// export const filterData = (data, filterBy, value) => {
//   const dataFiltered = data.filter(cat => {
//     if (cat["facts"][filterBy] === value || cat["extraInfo"][filterBy][value] === true) {
//       return cat;
//     }
//   });
//   return dataFiltered;
// };

// FUNCION SORTDATA
// export const sortData = (data, sortBy, sortOrder) => {
//   const ascendente = data.sort((a, b) => {
//     return a["facts"][sortBy] - b["facts"][sortBy];
//   });
//   const descendente = data.sort((a, b) => {
//     return b["facts"][sortBy] - a["facts"][sortBy];
//   });
//   if (sortOrder === "ascendente") {
//     return ascendente;
//   } else if (sortOrder === "descendente") {
//     return descendente;
//   } else return data;
// };

//---------------------------------------


//cambio adriana // orden A-Z y de Z-A
export const sortData = (data, sortBy, sortOrder) => {
  const data1 = data;
  data1.sort((a, b) =>{
    if(sortOrder === "asc"){
      return (a[sortBy] > b[sortBy]) ? 1 : -1; //codigo ternario si es true devuelve 1 si es false devuelve -1
    }else if(sortOrder === "desc"){
      return (a[sortBy] > b[sortBy]) ? -1 : 1;
    }else return 0;
  });

  return data1;

};



/*
//precio cachorro
export const sortData = (data, sortBy, sortOrder) => {
  const data1 = data;
  data1.sort((a, b) =>{
    if(sortOrder === "desc"){
      return (a["facts"][sortBy] < b["facts"][sortBy]) ? 1 : -1; //codigo ternario si es true devuelve 1 si es false devuelve -1
    }else if(sortOrder === "asc"){
      return (a["facts"][sortBy] > b["facts"][sortBy]) ? 1 : -1;
    }else return 0;
  });

  return data1;
}
*/