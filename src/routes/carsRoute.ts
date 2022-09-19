import { Router } from 'express';

const carsRoute = Router();

carsRoute.post('/cars', (req, res) => res.status(200).send('ok'));
// route.get('/frame/:id', (req, res) => frameController.readOne(req, res));

export default carsRoute;