import { IProductEntities, IProductQueryEntities } from "../models/entities";
import ProductService from "../productService";
import { mockProductService } from "./product.mock";
jest.mock('../models/index', () => ({
  get: jest.fn().mockResolvedValueOnce({}),
  scan: jest.fn().mockResolvedValueOnce([]),
  create: jest.fn().mockResolvedValueOnce([]),
  delete: jest.fn().mockResolvedValueOnce([]),
  update: jest.fn().mockResolvedValueOnce([]),
}));
describe('ProductService', () => { 
  describe('#update', () => {
    mockProductService.updateCases.forEach((caseValue) => {
        it(caseValue.title, () => {
          const service = new ProductService();
          const params = caseValue.params
          const result = service.update(params.id, params.model as IProductEntities)
          expect(result).toBeDefined()
        });
    });
  });
  describe('#find', () => {
    mockProductService.findCases.forEach((caseValue) => {
        it(caseValue.title, async () => {
          const service = new ProductService();
          const params = caseValue.params
          const result = service.find(params as IProductQueryEntities)
          expect(result).toBeDefined()
        });
    });
  });
  describe('#findOne', () => {
    mockProductService.findOneCases.forEach((caseValue) => {
        it(caseValue.title, async () => {
          const service = new ProductService();
          const params = caseValue.params
          const result = service.findOne(params)
          expect(result).toBeDefined()
        });
    });
  });
  describe('#create', () => {
    mockProductService.createCases.forEach((caseValue) => {
        it(caseValue.title, async () => {
          const service = new ProductService();
          const params = caseValue.params
          const result = service.create(params as IProductEntities)
          expect(result).toBeDefined()
        });
    });
  });
  describe('#delete', () => {
    mockProductService.deleteCases.forEach((caseValue) => {
        it(caseValue.title, async () => {
          const service = new ProductService();
          const params = caseValue.params
          const result = service.del(params)
          expect(result).toBeDefined()
        });
    });
  });
})