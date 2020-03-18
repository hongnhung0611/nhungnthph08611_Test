// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { HelloComponent } from './hello.component';
// import { ProductListComponent } from './product-list/product-list.component';
// import { SlideComponent } from './slide/slide.component';
// import { ProductComponent } from './product/product.component';
// import { CategoryComponent } from './category/category.component';

// import {FormsModule} from  '@angular/forms';

// @NgModule({
//   imports:      [ BrowserModule, FormsModule ],
//   declarations: [ AppComponent, HelloComponent, ProductListComponent, SlideComponent, ProductComponent, CategoryComponent ],
//   bootstrap:    [ AppComponent ]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { CpntestComponent } from './cpntest/cpntest.component';
import { WordComponent } from './word.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryComponent } from './category/category.component';
import { TestComponent } from './test/test.component';
import { CtvComponent } from './ctv/ctv.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    // CpntestComponent,
    // WordComponent,
    SlideComponent,
    ProductComponent,
    ProductListComponent,
    CategoryComponent,
    // TestComponent,
    // CtvComponent
  ],
  imports: [
    FormsModule,
    // AppRoutingModule,
    BrowserModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


