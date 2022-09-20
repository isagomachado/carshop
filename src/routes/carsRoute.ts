import { Router } from 'express';
import CarsController from '../controllers/CarsController';
import CarsService from '../services/CarsService';
import Car from '../models/Car';

const carsRoute = Router();

const car = new Car();
const carsService = new CarsService(car);
const carsController = new CarsController(carsService);

carsRoute.post('/', (req, res) => carsController.create(req, res));
carsRoute.get('/', (req, res) => carsController.read(req, res));

export default carsRoute;