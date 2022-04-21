import Joi from "joi";
export default class ProductValidate {
  public vCreateOrUpdate = async (obj: object): Promise<object> => {
    const schema = Joi.object().keys({
      name: Joi.string().required(),
      price: Joi.number().required()
    });
    return schema.validateAsync(obj);
  }
  public vId = async (obj: number): Promise<object> => {
    const schema = Joi.object().keys({
      id: Joi.string().required().uuid(),
    });
    return schema.validateAsync(obj);
  }
}