import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderProductionComponent } from './under-production.component';

describe('UnderProductionComponent', () => {
  let component: UnderProductionComponent;
  let fixture: ComponentFixture<UnderProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
