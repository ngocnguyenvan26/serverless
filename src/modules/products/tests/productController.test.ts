import { IProductEntities } from "../models/entities";
import ProductController from "../productController";
import { IMockProductEntities, mockProductController } from "./product.mock";

describe('ProductController', () => { 
  beforeEach(() => {
    jest.mock('../productService', () => {
      return {
        default: jest.fn().mockImplementation(() => {
            return {
              create: jest.fn(),
              update: jest.fn(),
              find: jest.fn(),
              findOne: jest.fn(),
              deleteOne: jest.fn()
            }   
        })
      }
    })
  })
  describe('#update', () => {
    mockProductController.updateCases.forEach( (caseValue: IMockProductEntities) => {
        it(caseValue.title, () => {
          const controller = new ProductController();
          const params = caseValue.params;
          const event = {body: JSON.stringify(params['model']), pathParameters: {id: params['id']}}
          controller.update(event)
            .then((result) => {
              !caseValue.error && expect(result).toBeDefined()
            })
            .catch((err) => {
              caseValue.error && expect(err).toBeDefined();
            });
        });
      });
  });
  describe('#find', () => {
    mockProductController.findCases.forEach((caseValue: IMockProductEntities) => {
        it(caseValue.title, async () => {
          const controller = new ProductController();
          const params = caseValue.params
          controller.find(params)
          .then((result) => {
            !caseValue.error && expect(result).toBeDefined()
          })
          .catch((err) => {
            caseValue.error && expect(err).toBeDefined();
          });
        });
    });
  });
  describe('#findOne', () => {
    mockProductController.findOneCases.forEach((caseValue: IMockProductEntities) => {
        it(caseValue.title, async () => {
          const controller = new ProductController();
          const params = caseValue.params
          controller.findOne(params)
          .then((result) => {
            !caseValue.error && expect(result).toBeDefined()
          })
          .catch((err) => {
            caseValue.error && expect(err).toBeDefined();
          });
        });
    });
  });
  describe('#create', () => {
    mockProductController.createCases.forEach((caseValue: IMockProductEntities) => {
        it(caseValue.title, async () => {
          const controller = new ProductController();
          const params = caseValue.params
          controller.create(params as IProductEntities)
          .then((result) => {
            !caseValue.error && expect(result).toBeDefined()
          })
          .catch((err) => {
            caseValue.error && expect(err).toBeDefined();
          });
        });
    });
  });
  describe('#deleteOne', () => {
    mockProductController.deleteCases.forEach((caseValue: IMockProductEntities) => {
        it(caseValue.title, async () => {
          const controller = new ProductController();
          const params = caseValue.params
          controller.deleteOne(params)
          .then((result) => {
            !caseValue.error && expect(result).toBeDefined()
          })
          .catch((err) => {
            caseValue.error && expect(err).toBeDefined();
          });
        });
    });
  });
})