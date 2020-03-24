import { Component, OnInit , Input} from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
//  @Input('data') product: Product;
product: Product;
  constructor(
    private productService : ProductService,
    private route : ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(param => {
      // console.log(param);
          this.product =this.productService.getProduct(param.id);
    })
  }

}