import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';

import { CompanyRoutingModule } from './company-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { MyjobsComponent } from './pages/myjobs/myjobs.component';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    CompanyComponent,
    HomeComponent,
    ListComponent,
    MyjobsComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
