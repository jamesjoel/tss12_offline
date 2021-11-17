import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashComponent } from './pages/dash/dash.component';
import { VieworderComponent } from './pages/vieworder/vieworder.component';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DishesComponent } from './pages/dishes/dishes.component';
import { AddMenuComponent } from './pages/add-menu/add-menu.component';
import { AddDishComponent } from './pages/add-dish/add-dish.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : LoginComponent
      },
      {
        path : "dashboard",
        component : DashComponent
      },
      {
        path : "vieworder",
        component : VieworderComponent
      },
      {
        path : "menu",
        component : MenuComponent
      },
      {
        path : "dishes",
        component : DishesComponent
      },
      {
        path : "add-menu",
        component : AddMenuComponent
      },
      {
        path : "add-dish",
        component : AddDishComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
