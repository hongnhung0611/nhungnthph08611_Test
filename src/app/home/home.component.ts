import {Component, OnInit, Input} from '@angular/core';

import {Product} from '../product';
import { data } from "../MockData";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
product: Product;
selected: Product;
  constructor() { }

  ngOnInit() {
  }

}