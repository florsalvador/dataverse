export const filterData = (data, filterBy, value) => {
  const dataFiltered = data.filter(cat => cat["facts"][filterBy] === value);
  return dataFiltered;
};

export const filterData2 = (data, filterBy, value) => {
  const dataFiltered = data.filter(cat => cat["extraInfo"][filterBy][value]);
  return dataFiltered;
};

// FUNCION SORTDATA ADRIANA 
export const sortData = (data, sortBy, sortOrder) => {
  const data1 = data;
  data1.sort((a, b) =>{
    if(sortOrder === "asc"){
      return (a[sortBy] > b[sortBy]) ? 1 : -1; //codigo ternario si es true devuelve 1 si es false devuelve -1
    }else if(sortOrder === "desc"){
      return (a[sortBy] > b[sortBy]) ? -1 : 1;
    }else return 0;
  });  return data1;};