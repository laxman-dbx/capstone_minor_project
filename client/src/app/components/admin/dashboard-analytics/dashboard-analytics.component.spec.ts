import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAnalyticsComponent } from './dashboard-analytics.component';

describe('DashboardAnalyticsComponent', () => {
  let component: DashboardAnalyticsComponent;
  let fixture: ComponentFixture<DashboardAnalyticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardAnalyticsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
