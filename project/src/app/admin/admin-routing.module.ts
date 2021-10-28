import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashComponent } from './pages/dash/dash.component';
import { VieworderComponent } from './pages/vieworder/vieworder.component';
import { AdminComponent } from './admin.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DishesComponent } from './pages/dishes/dishes.component';

const routes: Routes = [
  {
    path : "",
    component : AdminComponent,
    children : [
      {
        path : "",
        component : HomeComponent
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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
