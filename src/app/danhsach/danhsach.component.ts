import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-danhsach',
  templateUrl: './danhsach.component.html',
  styleUrls: ['./danhsach.component.css']
})
export class DanhsachComponent implements OnInit {

   products: Product[];
  page= 1;
  pageSize = 20;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }
}