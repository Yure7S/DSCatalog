import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { ButtonMasterComponent } from './shared/components/buttons/button-master/button-master.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { InputComponent } from './shared/components/input/input.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { FormularyComponent } from './shared/components/formulary/formulary.component';
import { RecoverComponent } from './features/recover/recover.component';
import { ButtonComponent } from './shared/components/buttons/button/button.component';
import { EmphasisLoginComponent } from './shared/components/emphasis-login/emphasis-login.component';
import { ProductDetailsComponent } from './features/product-details/product-details.component';
import { AdminComponent } from './features/admin/admin.component';
import { MyProductsComponent } from './features/admin-control-panel/my-products/my-products.component';
import { MyCategoriesComponent } from './features/admin-control-panel/my-categories/my-categories.component';
import { MyUsersComponent } from './features/admin-control-panel/my-users/my-users.component';
import { ProductCardAdminComponent } from './shared/components/product-card-admin/product-card-admin.component';
import { Button02Component } from './shared/components/buttons/button02/button02.component';
import { FormFilterComponent } from './shared/components/form-filter/form-filter.component';
import { RegisterProductComponent } from './features/admin-control-panel/register-product/register-product.component';
import { CardList01Component } from './shared/components/card-list01/card-list01.component';
import { RegisterUserComponent } from './features/admin-control-panel/register-user/register-user.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent,
    ButtonMasterComponent,
    ProductCardComponent,
    InputComponent,
    LoginComponent,
    RegisterComponent,
    FormularyComponent,
    RecoverComponent,
    ButtonComponent,
    EmphasisLoginComponent,
    ProductDetailsComponent,
    AdminComponent,
    MyProductsComponent,
    MyCategoriesComponent,
    MyUsersComponent,
    ProductCardAdminComponent,
    Button02Component,
    FormFilterComponent,
    RegisterProductComponent,
    CardList01Component,
    RegisterUserComponent,
    NotFoundComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
