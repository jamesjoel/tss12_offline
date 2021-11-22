import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HelpComponent } from './pages/help/help.component';
import { HomeComponent } from './pages/home/home.component';
import { MyFormComponent } from './pages/my-form/my-form.component';
import { ProductsComponent } from './pages/products/products.component';
import { StudentComponent } from './pages/student/student.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
