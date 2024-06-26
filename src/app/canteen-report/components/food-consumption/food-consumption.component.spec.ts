import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodConsumptionComponent } from './food-consumption.component';

describe('FoodConsumptionComponent', () => {
  let component: FoodConsumptionComponent;
  let fixture: ComponentFixture<FoodConsumptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodConsumptionComponent]
    });
    fixture = TestBed.createComponent(FoodConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
