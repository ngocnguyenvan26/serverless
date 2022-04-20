import { Context } from 'aws-lambda';
import ProductService from "./productService";
import ProductValidate from './productValidate';
import { IProductEntities, IProductQueryEntities } from './models/entities';

import { ResponseUtil } from '../../shares/response';

export default class ProductController {
  productService: ProductService;
  productValidate: ProductValidate;
  constructor() {
    this.productService = new ProductService();
    this.productValidate = new ProductValidate();
  }
  /**
   * Create user
   * @param {*} event
   */
   public create = async (event: any, context?: Context) => {
    try {
      console.log('functionName', context.functionName);
      const body = await this.productValidate.vCreateOrUpdate(JSON.parse(event.body)) as IProductEntities;
      console.log('body', body);
      const result = await this.productService.create(body);
      // const result = {}
      return ResponseUtil.success(result);
    } catch (err) {
      console.error(err);
      return ResponseUtil.error(err.message);
    }
  }

  /**
   * Update a user by id
   * @param event
   */
  public update = async (event: any, context?: Context) => {
    try {
      console.log('functionName', context.functionName);
      console.log({event})
      const params = await this.productValidate.vId(event.pathParameters) as IProductEntities;
      const body = await this.productValidate.vCreateOrUpdate(JSON.parse(event.body)) as IProductEntities;
      console.log('params', body);
      // const result = {}
      const result = await this.productService.update(params.id, body);
      return ResponseUtil.success(result);
    } catch (err) {
      console.error(err);
      return ResponseUtil.error(err.message);
    }
  }

  /**
   * Find user list
   */
  public find = async (event: any, context?: Context) => {
    try {
      console.log('functionName', context.functionName);
      console.log('event.queryStringParameters', event.queryStringParameters);
      const query = new IProductQueryEntities(event.queryStringParameters)
      const result = await this.productService.find(query);
      // const result = {}
      return ResponseUtil.success(result);
    } catch (err) {
      console.error(err);
      return ResponseUtil.error(err.message);
    }
  }

  /**
   * Query user by id
   * @param event
   */
  public findOne = async (event: any, context?: Context) => {
    try {
      console.log('functionName', context.functionName);
      const params = await this.productValidate.vId(event.pathParameters) as IProductEntities;
      const result = await this.productService.findOne(params.id);
      // const result = {}
      return ResponseUtil.success(result);
    } catch (err) {
      console.error(err);
      return ResponseUtil.error(err.message);
    }
  }

  /**
   * Delete user by id
   * @param event
   */
  public deleteOne = async (event: any, context?: Context) => {
    try {
      console.log('functionName', context.functionName);
      const params = await this.productValidate.vId(event.pathParameters) as IProductEntities;
      const result = await this.productService.del(params.id);
      // const result = {}
      return ResponseUtil.success(result);
    } catch (err) {
      console.error(err);
      return ResponseUtil.error(err.message);
    }
  }
}