import { Component, OnInit, Input } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../product.service";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"]
})
export class ProductDetailComponent implements OnInit {
  //  @Input('data') product: Product;
  products: Product[];
  product: Product;
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getProduct();
    // this.route.params.subscribe(param => {
    // this.product =this.productService.getProduct(param.id);
    // })
  }
  getProduct() {
    this.route.params.subscribe(param => {
      console.log(param);

      this.productService.getProduct(param.productId).subscribe(data => {
        console.log(data);
        this.product = data;
      });
    });
  }

  removeItem(id){
    // this.products = this.products.filter(product => product.id != id)
    this.productService.removeProduct(id).subscribe(response => {
      console.log(response);
      this.products = this.products.filter(product => product.id != response.id);
      

    })

  }
}
