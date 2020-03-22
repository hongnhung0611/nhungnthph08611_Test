import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductManagerComponent } from './product-manager/product-manager.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
   { path: 'add-product', component: ProductAddComponent},
  { path: 'about', component: AboutComponent},
  { path: 'products', component: ProductListComponent},
  { path: 'contact', component: ContactComponent},
   { path: 'manager', component: ProductManagerComponent},
  { path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
