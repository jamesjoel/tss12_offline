import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : "",
    loadChildren : ()=> import('./employee/employee.module').then(mod=>mod.EmployeeModule)
  },
  {
    path : "company",
    loadChildren :()=> import('./company/company.module').then(mod=>mod.CompanyModule)
  },
  {
    path : "owner",
    loadChildren : ()=> import('./owner/owner.module').then(mod=>mod.OwnerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
