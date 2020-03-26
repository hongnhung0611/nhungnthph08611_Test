// import { Component, OnInit } from '@angular/core';
// import {ProductService} from '../product.service';
// import {Product} from '../Product';
// @Component({
//   selector: 'app-product-manager',
//   templateUrl: './product-manager.component.html',
//   styleUrls: ['./product-manager.component.css']
// })
// export class ProductManagerComponent implements OnInit {
// products : Product[];
//   constructor(
//      private productService: ProductService
//   ) { }
   
  

//   ngOnInit() {
//     this.getProduct();
//   }
//   getProducts(){
//     this.productService.getProducts().subscribe(data => {
//       this.products = data;
//     })
//   }


// }
import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
 import {ProductService} from '../product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  products: Product[];
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(data => {
      return this.products = data;
    });
  }

removeItem(id){
    // this.products = this.products.filter(product => product.id != id)
    this.productService.removeProduct(id).subscribe(response => {
      console.log(response);
      this.products = this.products.filter(product => product.id != response.id)
    })

  }
  // removeItem(id){
  //   this.products = this.products.filter(product => product.id != id)
  
  // }
  //  deleteItem(product) {
  //   this.productService.deleteProduct(product).subscribe(data => {
  //       return this.products = this.products.filter(item => item.id !== data.id)
  //   })
  // }

}
