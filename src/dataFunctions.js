export const filterData = (data, filterBy, value) => {
  return data.filter(cat => cat["facts"][filterBy] === value)
};

export const filterDataObj = (data, filterBy, value) => {
  return data.filter(cat => cat["extraInfo"][filterBy][value]) 
};

// funcion ordenar por valores en "facts"
export const sortData = (data, sortBy, sortOrder) => {
  const dataSorted = data.sort((a, b) =>{
    if(sortOrder === "asc"){
      return (a["facts"][sortBy] > b["facts"][sortBy]) ? 1 : -1; // codigo ternario si es true devuelve 1 si es false devuelve -1
    }else if(sortOrder === "desc"){
      return (a["facts"][sortBy] < b["facts"][sortBy]) ? 1 : -1;
    }else return 0;
  });

  return dataSorted;
};

// funcion ordenar por nombre, fuera de "facts"
export const sortDataName = (data, sortBy, sortOrder) => {
  const dataSorted = data.sort((a, b) =>{
    if(sortOrder === "asc"){
      return (a[sortBy] > b[sortBy]) ? 1 : -1; // codigo ternario si es true devuelve 1 si es false devuelve -1
    }else if(sortOrder === "desc"){
      return (a[sortBy] < b[sortBy]) ? 1 : -1;
    }else return 0;
  });

  return dataSorted;
};