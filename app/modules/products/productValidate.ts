import Joi from "joi";
export class ProductValidate {
  private joi: Joi.AnySchema;
  // public vCreateOrUpdate = async (obj: object): Promise<Joi.ValidationResult> => {
  //   const schema = Joi.object().keys({
  //     name: Joi.string().required(),
  //     price: Joi.number().required()
  //   });
  //   return schema.validate(obj);
  // }
  public vCreateOrUpdate(signupObj: any) {
    const object = {
        name: Joi.string().required(),
        price: Joi.number().required() 
    };
    return this.setUpJoi(object, signupObj);
  }
  private setUpJoi(objectInit: any, objectUpdate: any) {
    this.joi = Joi.object(objectInit);
    return this.joi.validateAsync(objectUpdate);
  }
}