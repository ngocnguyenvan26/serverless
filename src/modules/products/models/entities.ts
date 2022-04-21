import { PAGE_SIZE } from '../../../config';
export class IProductQueryEntities {
  minPrice: number = null;
  maxPrice: number = null;
  name: string = '';
  limit: number = PAGE_SIZE.Products;
  startAt: string = '';
  constructor(query) {
    if (!query) return;
    this.name = query.name ? query.name : '';
    this.minPrice = query.minPrice ? query.minPrice : null;
    this.maxPrice = query.maxPrice ? query.maxPrice : null;
    this.limit = query.limit ? query.limit : PAGE_SIZE.Products;
    this.startAt = query.startAt ? query.startAt : '';
  }
}
export class IProductEntities {
  id: string;
  name: string;
  price: number;
  createdAt: number;
  updateAt: number;
}
