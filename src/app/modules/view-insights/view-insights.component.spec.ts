import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewInsightsComponent } from './view-insights.component';

describe('ViewInsightsComponent', () => {
  let component: ViewInsightsComponent;
  let fixture: ComponentFixture<ViewInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewInsightsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
