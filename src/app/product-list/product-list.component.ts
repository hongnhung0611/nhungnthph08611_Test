import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

import { Product } from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Product[];
  selected: Product;
  constructor(
    private productService: ProductService
  ) { 
    console.log('constructor')
  }

  ngOnInit(): void {
    this.getProducts();
  }
 
  getProducts(){
    this.products = this.productService.getProducts();
  }
  removeItem(id){
    this.products = this.products.filter(product => product.id != id)
    // this.products = this.productService.removeProduct(id);
    // this.products = this.products.filter(product => product.id != id);
  }



  changeStatus(){
    // this.product.status = !this.product.status;
  }
  changeName(e){
    // this.product.name = e.target.value;
  }
  // removeItem(id){
  //   this.products = this.products.filter(product => product.id != id);
  // }
  showDetail(product){
    // console.log(product);
    this.selected = product;
    console.log(product);
  }
}
