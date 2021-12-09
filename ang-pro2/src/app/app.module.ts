import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { Box1Component } from './shared/box1/box1.component';
import { HelpComponent } from './pages/help/help.component';
import { ProductsComponent } from './pages/products/products.component';
import { UserComponent } from './pages/user/user.component';
import { MyFormComponent } from './pages/my-form/my-form.component';
import { StudentComponent } from './pages/student/student.component';
import { BoxComponent } from './shared/box/box.component';
import { UserInfoComponent } from './shared/user-info/user-info.component';
import { ServiceComponent } from './pages/service/service.component';
import { TermsComponent } from './pages/terms/terms.component';
import { InfoBoxComponent } from './shared/info-box/info-box.component';
import { PhotosComponent } from './pages/photos/photos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    Box1Component,
    HelpComponent,
    ProductsComponent,
    UserComponent,
    MyFormComponent,
    StudentComponent,
    BoxComponent,
    UserInfoComponent,
    ServiceComponent,
    TermsComponent,
    InfoBoxComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
