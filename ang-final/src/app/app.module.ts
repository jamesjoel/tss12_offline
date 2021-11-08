import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './shared/header/header.component';
import { BannerComponent } from './shared/banner/banner.component';
import { WelcomeComponent } from './shared/welcome/welcome.component';
import { UpdateAreaComponent } from './shared/update-area/update-area.component';
import { BookTableComponent } from './shared/book-table/book-table.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SignupComponent } from './user/pages/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    BannerComponent,
    WelcomeComponent,
    UpdateAreaComponent,
    BookTableComponent,
    FooterComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
