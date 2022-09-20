import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';

import { ErrorTypes } from '../../../errors/catalog';
import { carMock, carMockWithId } from '../../mocks/carMock';
import CarsController from '../../../controllers/CarsController';
import CarsService from '../../../services/CarsService';
import CarModel from '../../../models/Car';

describe('Car Service', () => {
  const carModel = new CarModel();
  const carsService = new CarsService(carModel);
  const carsController = new CarsController(carsService);

  const req = {} as Request;
  const res = {} as Response;

  beforeEach(() => {
    sinon.stub(carsService, 'create').resolves(carMock);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  })

  afterEach(() => {
		sinon.restore();
	});

  describe('creating a car', () => {
    it('successfully created', async () => {
      req.body = carMock;
      await carsController.create(req, res);

      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMock)).to.be.true;
    })
  })
})

