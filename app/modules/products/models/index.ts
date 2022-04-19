export default class ProductModel {
  id: string;
  name: string;
  price: number;
  static get tableName() {
    return "products";
  }
}