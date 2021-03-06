import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SlideComponent } from './slide/slide.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './product.service';
import { ProductAddComponent } from './product-add/product-add.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { FooterComponent } from './footer/footer.component';
import { ProductIntroduceComponent } from './product-introduce/product-introduce.component';
import { ProductFastComponent } from './product-fast/product-fast.component';
import { AbouttComponent } from './aboutt/aboutt.component';
import { CategoryyComponent } from './categoryy/categoryy.component';
import { DanhsachComponent } from './danhsach/danhsach.component';
import { BlogComponent } from './blog/blog.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AdminManagerComponent } from './admin-manager/admin-manager.component';

// import { ProductNewComponent } from './product-new/product-new.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SlideComponent,
    ProductComponent,
    CategoryComponent,
    ProductAddComponent,
    HomeComponent,
    ContactComponent,
    ProductDetailComponent,
    ProductManagerComponent,
    AboutComponent,
    NotFoundComponent,
    ProductEditComponent,
    FooterComponent,
    ProductIntroduceComponent,
    ProductFastComponent,
    AbouttComponent,
    CategoryyComponent,
    DanhsachComponent,
    BlogComponent,
    AdminComponent,
    HeaderComponent,
    DashboardComponent
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }



