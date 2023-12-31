import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { AdminComponent } from './features/admin/admin.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { RecoverComponent } from './features/recover/recover.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { MyProductsComponent } from './features/admin-control-panel/my-products/my-products.component';
import { MyCategoriesComponent } from './features/admin-control-panel/my-categories/my-categories.component';
import { MyUsersComponent } from './features/admin-control-panel/my-users/my-users.component';
import { RegisterProductComponent } from './features/admin-control-panel/register-product/register-product.component';
import { RegisterUserComponent } from './features/admin-control-panel/register-user/register-user.component';
import { NotFoundComponent } from './features/not-found/not-found.component';
import { authGuard } from './core/guard/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalog', component: CatalogComponent },
  { path: 'admin', 
  component: AdminComponent, 
    title: "Admin Panel", 
    canActivate: [authGuard], 
    children: [
      { path: 'meus-produtos', component: MyProductsComponent },
      { path: 'minhas-categorias', component: MyCategoriesComponent },
      { path: 'meus-usuarios', component: MyUsersComponent },
      { path: 'cadastrar-produto', component: RegisterProductComponent },
      { path: 'cadastrar-usuario', component: RegisterUserComponent },
    ] 
  },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: RegisterComponent },
  { path: 'recuperar', component: RecoverComponent },
  { path: 'product-details', component: ProductDetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
