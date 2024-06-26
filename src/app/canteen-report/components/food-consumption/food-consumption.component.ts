import { Component, OnInit } from '@angular/core';
import { CustomerReportService } from '../../services/customer-report.service';
import { MonthsOrder, User } from '../../models/customer-report-model';

@Component({
  selector: 'app-food-consumption',
  templateUrl: './food-consumption.component.html',
  styleUrls: ['./food-consumption.component.scss'],
})
export class FoodConsumptionComponent implements OnInit {
  userFoodOrderDetails: any = [];
  fineAmount: number = 100;
  fineTotalCount: number = 0;
  constructor(private _customerReportService: CustomerReportService) {}

  ngOnInit(): void {
    this.getCustomerFoodOrderDetails();
  }

  getCustomerFoodOrderDetails() {
    const monthsFoodOderData: MonthsOrder = {
      month: 11,
    };
    this._customerReportService
      .customerCanteenReport(monthsFoodOderData)
      .subscribe((resp) => {
        this.userFoodOrderDetails = resp;
        this.calculateTotalFines(this.userFoodOrderDetails);
      });
  }

  calculateTotalFines(foodOrderData: User) {
    let pendingFineAmount = this.fineAmount;
    foodOrderData.reports.forEach((element: any) => {
      if (
        (element.opt_ins.breakfast ||
          element.opt_ins.lunch ||
          element.opt_ins.dinner) == 'Pending'
      ) {
        pendingFineAmount += pendingFineAmount;
      }
    });
    this.fineTotalCount = pendingFineAmount;
  }
}
