import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminProRoutingModule } from './admin-pro-routing.module';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Grafica1Component } from './pages/grafica1/grafica1.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    NopagefoundComponent,
    DashboardComponent,
    Grafica1Component,
    ProgressComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    AdminProRoutingModule,
    SharedModule
  ]
})
export class AdminProModule { }
