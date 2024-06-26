import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanteenReportRoutingModule } from './canteen-report-routing.module';
import { FoodConsumptionComponent } from './components/food-consumption/food-consumption.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [FoodConsumptionComponent, HeaderComponent],
  imports: [CommonModule, CanteenReportRoutingModule, HttpClientModule],
})
export class CanteenReportModule {}
