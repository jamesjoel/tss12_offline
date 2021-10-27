import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CompanyComponent } from './company.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MyjobsComponent } from './pages/myjobs/myjobs.component';

const routes: Routes = [
    {
        path : "",
        component : CompanyComponent,
        children : [
            {
                path : "",
                component : HomeComponent
            },
            {
                path : "list",
                component : ListComponent
            },
            {
                path : "myjobs",
                component : MyjobsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
// export class EmployeeRoutingModule { }
export class CompanyRoutingModule { }
