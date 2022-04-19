import AWS from "aws-sdk";
import { v4 as uuidv4 } from 'uuid';
import ProductModel from "./models";

export class ProductService {
  private documentClient = new AWS.DynamoDB.DocumentClient();
  constructor() {
  }
  public create = async (user: ProductModel): Promise<any> => {
    try {
      user.id = uuidv4();
      const params = {
        TableName: ProductModel.tableName,
        Item: user,
      }
      console.log(user);
      const result = await this.documentClient.put(params).promise();
      console.log('result', result);
    } catch (err) {
      console.log('err', err)
      throw err;
    }
  }
}