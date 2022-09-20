import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarsController {
  constructor(private _service: IService<ICar>) { }
  
  public async create(req: Request, res: Response<ICar>) {
    // console.log(req.body);

    const { doorsQty, seatsQty, model, year, color, buyValue } = req.body;
    const car = { model, doorsQty, seatsQty, year, color, buyValue };
    const result = await this._service.create(car);

    console.log(result);

    return res.status(201).json(result);
  }
}

export default CarsController;
