export const filterData = (data, filterBy, value) => {
  const selected = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i]["facts"][filterBy] === value) {
      selected.push(data[i]);
    }
  }
  return selected;
};

// NO FUNCIONA:
// if (data[i]["extraInfo"][filterBy][value] === true) {
//       selected.push(data[i]);
//     }

export const anotherExample = () => {
  return [];
};
