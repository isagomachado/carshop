import { Model } from 'mongoose';

// import { isValidObjectId, Model, UpdateQuery } from 'mongoose';
// import { restore } from 'sinon';
// import { ErrorTypes } from '../errors/catalog';
import { IModel } from '../interfaces/IModel';

abstract class MongoModel<T> implements IModel<T> {
  protected _model: Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }

  public async create(obj: T): Promise<T> {
    const created = await this._model.create({ ...obj });

    return created as T & { _id: string };
  }

  public async read(): Promise<T[]> {
    return this._model.find();
  }

  // public async readOne(_id: string): Promise<T | null> {
  //   if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);

  //   return this._model.findOne({ _id })
  // }

  // public async update(_id: string, obj:Partial<T>): Promise<T | null> {
  //   if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);

  //   const updated = await this._model.findByIdAndUpdate(
  //     { _id },
  //     { ...obj } as UpdateQuery<T>,
  //     { new: true },
  //   )

  //   if (!updated) return null;

  //   return updated;
  // }

  // public async delete(_id: string): Promise<T | null> {
  //   if (!isValidObjectId(_id)) throw Error(ErrorTypes.EntityNotFound);

  //   const response = await this._model.findByIdAndDelete({ _id });
  //   return response;
  // }
}

export default MongoModel;
