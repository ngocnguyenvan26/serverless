
import { Handler, Context } from 'aws-lambda';
import ProductController from './productController';
const productController = new ProductController();

export const create: Handler = (event: any, context: Context) =>
  productController.create(event, context);

export const update: Handler = (event: any, context: Context) =>
  productController.update(event, context);

export const find: Handler = (event: any, context: Context) =>
  productController.find(event, context);

export const findOne: Handler = (event: any, context: Context) =>
  productController.findOne(event, context);

export const deleteOne: Handler = (event: any, context: Context) =>
  productController.deleteOne(event, context);
