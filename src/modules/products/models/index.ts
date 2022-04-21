import dynamoose from 'dynamoose';
import { Schema } from 'dynamoose/dist/Schema';
import { v4 as uuidv4 } from 'uuid';

const productSchema = new Schema({
  id: { type: String, hashKey: true, default: uuidv4() },
  name: { type: String, index: {
    name: 'name-index',
  }},
  price: { type: Number },
},                               {
  timestamps: true,
});
const ProductModel = dynamoose.model('products', productSchema, {
  create: true,
});
export default ProductModel;
