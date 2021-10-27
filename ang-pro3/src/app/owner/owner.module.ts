import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './owner.component';
import { HomeComponent } from './pages/home/home.component';
import { DashComponent } from './pages/dash/dash.component';
import { SettingComponent } from './pages/setting/setting.component';
import { OwnerRoutingModule } from './owner-routing.module';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    OwnerComponent,
    HomeComponent,
    DashComponent,
    SettingComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
