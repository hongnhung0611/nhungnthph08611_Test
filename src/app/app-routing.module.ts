import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { AboutComponent } from "./about/about.component";
import { AbouttComponent } from "./aboutt/aboutt.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { HomeComponent } from "./home/home.component";
import { ProductManagerComponent } from "./product-manager/product-manager.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { BlogComponent } from "./blog/blog.component";
import { AdminComponent } from "./admin/admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "add-product", component: ProductAddComponent },
  { path: "about", component: AboutComponent },
   { path: "aboutt", component: AbouttComponent },
  { path: "product", component: ProductListComponent },
  
  { path: "contact", component: ContactComponent },
  { path: "manager", component: ProductManagerComponent },
  { path: "product/:productId", component: ProductDetailComponent },
  { path: 'product/edit/:productId' , component: ProductEditComponent},
  { path: 'product/add' , component: ProductAddComponent},
{ path: 'blog' , component: BlogComponent},
 { path: 'admin', component: AdminComponent, 
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent},
        { path: "manager", component: ProductManagerComponent},
        { path: 'product-add', component: ProductAddComponent},
        { path: 'product/:productId', component: ProductDetailComponent},
         { path: 'product-list', component: ProductListComponent},
      ]
    },

  { path: "**", component: NotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
