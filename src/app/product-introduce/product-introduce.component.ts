import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-introduce',
  templateUrl: './product-introduce.component.html',
  styleUrls: ['./product-introduce.component.css']
})
export class ProductIntroduceComponent implements OnInit {

  selected: Product;
  products: Product[];
  
  constructor(
    private productService: ProductService,
        private route: ActivatedRoute
  ) { 
    console.log('constructor')
  }

  ngOnInit(){
    this.getProducts();
  }
    showDetail(product){ 
    this.selected = product;
  }
 
  getProducts(){
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
    // this.products = this.productService.getProducts();
  }
  removeItem(id){
    // this.products = this.products.filter(product => product.id != id)
    this.productService.removeProduct(id).subscribe(response => {
      console.log(response);
      this.products = this.products.filter(product => product.id != response.id)
    })

  }



  changeStatus(){
    // this.product.status = !this.product.status;
  }
  changeName(e){
    // this.product.name = e.target.value;
  }

}