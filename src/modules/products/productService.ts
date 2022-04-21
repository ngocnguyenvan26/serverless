import dynamoose from 'dynamoose';
import { IProductQueryEntities, IProductEntities } from './models/entities';
import ProductModel from './models/index';

export default class ProductService {
  constructor() {
  }
  public create = async (p: IProductEntities): Promise<any> => {
    try {
      return ProductModel.create(p);
    } catch (err) {
      console.log('err', err)
      throw err;
    }
  }
  public update = async (id: string, p: IProductEntities): Promise<any> => {
    try {
      const isExist = await this.findOne(id);
      console.log({isExist})
      if (!isExist) throw new Error('not found');
      p.id = id;
      return ProductModel.update(p);
    } catch (err) {
      console.log('err', err)
      throw err;
    }
  }
  public findOne = async (id: string): Promise<any> => {
    try {
      if (!id) throw new Error('id not null');
      return ProductModel.get(id);
    } catch (err) {
      console.log('err', err)
      throw err;
    }
  }
  public find = async (query: IProductQueryEntities): Promise<any> => {
    try {
      const { name, limit, startAt } = query;
      console.log(query)
      let co = new dynamoose.Condition();
      if (name) {
        co = co.where('name').contains(name);
      }
      let qB = ProductModel.scan(co) as any;
      if (startAt) {
        qB = qB.startAt({id: startAt})
      }
      const exec = await qB.limit(limit).exec();
      console.log('last key', exec.lastKey)
      console.log('json', exec.toJSON())
      return { results: exec.toJSON(), lastKey: exec.lastKey};
    } catch (err) {
      console.log('err', err)
      throw err;
    }
  }
  public del = async (p): Promise<any> => {
    try {
      return ProductModel.delete(p);
    } catch (err) {
      console.log('err', err)
      throw err;
    }
  }
}