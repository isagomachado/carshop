import { ICar } from '../../interfaces/ICar';

const carMock: ICar = {
  model: 'any-model',
  year: 2022,
  color: 'any-color',
  buyValue: 5000000,
  doorsQty: 4,
  seatsQty: 7,
}

const carMockWithId: ICar & { _id:string } = {
  _id: '4edd40c86762e0fb12000003',
  model: 'any-model',
  year: 2022,
  color: 'any-color',
  buyValue: 5000000,
  doorsQty: 4,
  seatsQty: 7,
}

export { carMock, carMockWithId };
