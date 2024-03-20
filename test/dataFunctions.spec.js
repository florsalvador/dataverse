import { filterData} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

describe('Función filterData', () => {

  it('returns `2 para la cantidad de gatos de pelo corto`', () => {
    expect(filterData(fakeData, "pelajeGato", "Pelo corto")).toHaveLength(2);
  });
});
/*
describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/