import { Request, Response } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarsController {
  constructor(private _service: IService<ICar>) { }
  
  public async create(req: Request, res: Response<ICar>) {
    const { doorsQty, seatsQty, model, year, color, buyValue } = req.body;
    
    const car = { model, doorsQty, seatsQty, year, color, buyValue };
    
    const result = await this._service.create(car);

    return res.status(201).json(result);
  }

  public async read(_req: Request, res: Response<ICar[]>) {
    const result = await this._service.read();
    
    return res.status(200).json(result);
  }
}

export default CarsController;
