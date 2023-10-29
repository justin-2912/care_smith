import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerClearanceComponent } from './customer-clearance.component';

describe('CustomerClearanceComponent', () => {
  let component: CustomerClearanceComponent;
  let fixture: ComponentFixture<CustomerClearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerClearanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerClearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
