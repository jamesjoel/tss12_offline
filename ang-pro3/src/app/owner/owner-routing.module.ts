import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OwnerComponent } from './owner.component';
import { DashComponent } from './pages/dash/dash.component';
import { SettingComponent } from './pages/setting/setting.component';

const routes: Routes = [
    {
        path: "",
        component: OwnerComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "setting",
                component: SettingComponent
            },
            {
                path : "dash",
                component : DashComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OwnerRoutingModule { }
