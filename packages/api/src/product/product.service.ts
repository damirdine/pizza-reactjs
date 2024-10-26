import { Injectable } from '@nestjs/common';
import { pizzas } from './product.data';

@Injectable()
export class ProductService {
  private pizzas = pizzas;

  index() {
    return { data: this.pizzas, total: this.pizzas.length };
  }
}
