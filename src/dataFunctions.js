export const filterData = (data, filterBy, value) => {
  const dataFiltered = data.filter(cat => {
    if (cat["facts"][filterBy] === value) {
      return cat;
    } else if (cat["extraInfo"] && cat["extraInfo"][filterBy] && cat["extraInfo"][filterBy][value]) {
      return cat;
    }
  });
  return dataFiltered;
};

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
