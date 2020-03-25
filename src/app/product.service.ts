import { Injectable } from "@angular/core";
import { data } from "./MockData";
import { Product } from "./Product";
import { HttpClient } from "@angular/common/http";
import { Observable} from 'rxjs';
@Injectable()
export class ProductService {
  // products = data;
  api = 'https://5e79b4b817314d00161333da.mockapi.io/product';
  // api : 'https://5e7a380817314d0016133ec3.mockapi.io/products';
  constructor(
    private http : HttpClient
  ) {}

  

  getProducts() : Observable<Product[]> { //danh sách sp
    // return this.products;
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product> { 
    // return this.products.find(product => product.id == id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  updateProduct(product): Observable<Product>{
return this.http.put<Product>(`${this.api}/${product.id}` , product);
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
