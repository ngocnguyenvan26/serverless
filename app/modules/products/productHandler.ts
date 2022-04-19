
import { Handler, Context } from 'aws-lambda';
import dotenv from 'dotenv';
import path from 'path';
const dotenvPath = path.join(__dirname, '../', `config/.env.${process.env.NODE_ENV}`);
dotenv.config({
  path: dotenvPath,
});
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
