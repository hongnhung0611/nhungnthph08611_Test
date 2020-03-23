import { Injectable } from "@angular/core";
import { data } from "./MockData";
import { Product } from "./Product";

@Injectable()
export class ProductService {
  products = data;
  constructor() {}

  getProducts() { //danh sách sp
    return this.products;
  }
  getProduct(id) { 
    return this.products.find(product => product.id == id);
  }
  removeProduct(id) {
    return this.products.filter(product => product.id != id);
  }
  addProduct(product) {
    const newProduct = { id: 5, ...product };
    this.products.push(newProduct);
    console.log(this.products);
  }
  editProduct() {
    // sua san pham
  }
}
