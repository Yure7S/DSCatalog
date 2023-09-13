import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './features/home/home.component';
import { CatalogComponent } from './features/catalog/catalog.component';
import { AdminComponent } from './features/admin/admin.component';
import { ButtonMasterComponent } from './shared/components/button-master/button-master.component';
import { ProductCardComponent } from './shared/components/product-card/product-card.component';
import { InputComponent } from './shared/components/input/input.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { FormularyComponent } from './shared/components/formulary/formulary.component';
import { RecoverComponent } from './features/recover/recover.component';
import { ButtonComponent } from './shared/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CatalogComponent,
    AdminComponent,
    ButtonMasterComponent,
    ProductCardComponent,
    InputComponent,
    LoginComponent,
    RegisterComponent,
    FormularyComponent,
    RecoverComponent,
    ButtonComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
