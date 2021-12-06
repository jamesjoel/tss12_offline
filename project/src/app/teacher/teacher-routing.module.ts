import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path : "",
    component : TeacherComponent,
    children : [
      {
        path : "",
        component : HomeComponent
      },
      {
        path : "add",
        component : AddComponent
      },
      {
        path : "edit/:id",
        component : AddComponent
      },
      {
        path : "about",
        component : AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
