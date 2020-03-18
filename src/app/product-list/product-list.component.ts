import { Component, OnInit } from '@angular/core';
import {Product} from '../Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // name : string =' item1';
  // price : number = 20;
  // desc : string = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  // status : boolean = true
  product: Product={
    id :1,
    name: "213",
    price : 20000,
    desc :'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur! aaaaaaaaaaaaaaaaaaaaaaaaaaa',
    status : false,
    img : 'https://dummyimage.com/275x175/000/fff?fbclid=IwAR3bO5qngYKlzkgox65Ui-HdgJTCFMZkZaemLSMoUHKsg8MeDcaGAPBzWd4'
    

  }
  changeStatus(){
    this.product.status = !this.product.status;
  }
  changeName(e){
    this.product.name = e.target.value;
  }
 


}
