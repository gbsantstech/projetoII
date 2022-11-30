import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SenacCoinDashboardComponent } from './senac-coin-dashboard.component';

describe('SenacCoinDashboardComponent', () => {
  let component: SenacCoinDashboardComponent;
  let fixture: ComponentFixture<SenacCoinDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SenacCoinDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SenacCoinDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
