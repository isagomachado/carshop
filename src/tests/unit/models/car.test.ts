import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import CarModel from '../../../models/Car';
import { carMock, carMockWithId } from '../../mocks/carMock';

describe('Car Model', () => {
  const carModel = new CarModel();

  beforeEach(() => {
    sinon.stub(Model, 'create').resolves(carMockWithId)
  })

  afterEach(() => {
		sinon.restore();
	});

  describe('creating a car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockWithId);
    })
  })

})
