import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    loadChildren : ()=> import('./user/user.module').then(mod=>mod.UserModule)
  },
  {
    path : "admin",
    loadChildren : ()=> import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path : "teacher",
    loadChildren : ()=> import('./teacher/teacher.module').then(tec=>tec.TeacherModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
