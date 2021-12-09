import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HelpComponent } from './pages/help/help.component';
import { HomeComponent } from './pages/home/home.component';
import { MyFormComponent } from './pages/my-form/my-form.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServiceComponent } from './pages/service/service.component';
import { StudentComponent } from './pages/student/student.component';
import { TermsComponent } from './pages/terms/terms.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path : "",
    component : HomeComponent
  },
  {
    path : "my-form",
    component : MyFormComponent
  },
  {
    path : "about",
    component : AboutComponent
  },
  {
    path : "contact",
    component : ContactComponent
  },
  {
    path : "help",
    component : HelpComponent
  },
  {
    path : "products",
    component : ProductsComponent
  },
  {
    path : "user",
    component : UserComponent
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "service",
    component : ServiceComponent
  },
  {
    path : "terms",
    component : TermsComponent
  },
  {
    path : "photos",
    component : PhotosComponent
  },
  {
    path : "photos/:pageno/:total",
    component : PhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
