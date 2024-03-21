import { filterData, sortData, computeStats} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

describe('Función filterData', () => {

  it('Retorna 2 para la cantidad de gatos de pelo corto', () => {
    expect(filterData(fakeData, "pelajeGato", "Pelo corto")).toHaveLength(2);
  });
  it('Retorna 0 para la cantidad de gatos de pelo semilargo', () => {
    expect(filterData(fakeData, "pelajeGato", "Pelo semilargo")).toHaveLength(0);
  });
  it('Retorna 3 para la cantidad de gatos de pelo largo', () => {
    expect(filterData(fakeData, "pelajeGato", "Pelo largo")).toHaveLength(3);
  });
  it('Retorna 0 para la cantidad de gatos sin pelo', () => {
    expect(filterData(fakeData, "pelajeGato", "Sin pelo")).toHaveLength(0);
  });
  it('Retorna 0 para la cantidad de gatos sin pelo', () => {
    expect(filterData(fakeData, "pelajeGato", "Sin pelo")).not.toHaveLength(1);
  });
});

describe('Función sortData', () => {

  it('Retorna Bengalí como primer elemento del arreglo de gatos ordenados A-Z', () => {
    expect(sortData(fakeData, "name", "asc")[0]["name"]).toBe("Bengalí");
  });
  it('Retorna Siberiano como primer elemento del arreglo de gatos ordenados Z-A', () => {
    expect(sortData(fakeData, "name", "desc")[0]["name"]).toBe("Siberiano");
  });
});

describe('Función computeStats', () => {

  it('Retorna 1160 para el promedio de precios de los gatos', () => {
    expect(computeStats(fakeData)).toBe(1160);
  });
});
