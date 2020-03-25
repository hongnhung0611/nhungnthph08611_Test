import { Injectable } from "@angular/core";
import { data } from "./MockData";
import { Product } from "./Product";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class ProductService {
  // products = data;
  // api = "https://5e79b4b817314d00161333da.mockapi.io/product";
  // api = 'https://5e7a380817314d0016133ec3.mockapi.io/products';
    api = 'https://5e7a380817314d0016133ec3.mockapi.io/products';

  // api = "https://5e79aefa17314d0016133349.mockapi.io/products?fbclid=IwAR1GJI89Wy5WEQb0X7SjWYSrMbSY4b8hzzyu-UzGOYsuewtO_qgsk71jpuc";
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    //danh sách sp
    // return this.products;
    return this.http.get<Product[]>(this.api);
  }
  getProduct(id): Observable<Product> {
    // return this.products.find(product => product.id == id);
    return this.http.get<Product>(`${this.api}/${id}`);
  }
  updateProduct(product): Observable<Product> {
    return this.http.put<Product>(`${this.api}/${product.id}`, product);
  }
  addProduct(product): Observable<Product> {
    return this.http.post<Product>(`${this.api}`, product);
    // const newProduct = { id: 5, ...product };
    // this.products.push(newProduct);
    // console.log(this.products);
  }

  removeProduct(id) {
    return this.products.filter(product => product.id != id);
  }

  editProduct() {
    // sua san pham
  }
}
