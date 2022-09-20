import { expect } from 'chai';
import * as sinon from 'sinon';
import { ZodError } from 'zod';

import { ErrorTypes } from '../../../errors/catalog';
import { carMock, carMockWithId } from '../../mocks/carMock';
import CarsService from '../../../services/CarsService';
import CarModel from '../../../models/Car';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carsService = new CarsService(carModel);

  beforeEach(() => {
    sinon.stub(carModel, 'create').resolves(carMockWithId)
  })

  afterEach(() => {
		sinon.restore();
	});

  describe('creating a car', () => {
    it('successfully created', async () => {
      const carCreated = await carsService.create(carMock);

      expect(carCreated).to.be.deep.equal(carMockWithId);
    })

    it('Failure created', async () => {
      let error;
      try {
        await carsService.create({});
      } catch (err) {
        error = err
      }

      expect(error).to.be.instanceOf(ZodError);
    })
  })

})

