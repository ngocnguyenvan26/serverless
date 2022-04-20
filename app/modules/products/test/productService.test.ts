import { findOneCases } from "./productService.mock";

describe('ProductService', () => { 
  describe('#findOne', () => {
    findOneCases.forEach((caseValue) => {
        it(caseValue.title, (done) => {
          expect(1).toBe(1);
        });
    });
});
})