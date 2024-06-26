import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodConsumptionComponent } from './components/food-consumption/food-consumption.component';

const routes: Routes = [
  {
    path: '',
    component: FoodConsumptionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CanteenReportRoutingModule {}
