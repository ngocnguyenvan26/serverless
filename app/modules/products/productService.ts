import dynamoose from 'dynamoose';
import config from '../../config';
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
      p.id = id;
      return ProductModel.update(p);
    } catch (err) {
      console.log('err', err)
      throw err;
    }
  }
  public findOne = async (id: string): Promise<any> => {
    try {
      return ProductModel.get(id);
    } catch (err) {
      console.log('err', err)
      throw err;
    }
  }
  public find = async (query: IProductQueryEntities): Promise<any> => {
    try {
      const { name, minPrice, maxPrice, limit, startAt } = query;
      console.log(query)
      let co = new dynamoose.Condition();
      if (name) {
        co = co.where('name').contains(name);
      }
      let qB = ProductModel.scan(co) as any;
      if (startAt) {
        qB = qB.startAt({id: startAt})
      }
      let a = 1;
      let b = 1;
      let c = 1;
      let d = 2;
      let e = 2;
      const exec = await qB.limit(limit).exec();
      console.log('last key', exec.lastKey)
      console.log('json', exec.toJSON())
      console.log('123')
      return { results: exec.toJSON(), lastKey: exec.lastKey, verions: config.VERSIONS};
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