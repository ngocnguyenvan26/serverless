import { Handler, Context } from 'aws-lambda';
import ProductController from './productController';
const productController = new ProductController();

export const create: Handler = (event: any, context: Context) => {
  return productController.create(event, context);
};

export const update: Handler = (event: any) => productController.update(event);

export const find: Handler = () => productController.find();

export const findOne: Handler = (event: any, context: Context) => {
  return productController.findOne(event, context);
};

export const deleteOne: Handler = (event: any) => productController.deleteOne(event);
