import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HuderumOverviewComponent } from './huderum-overview.component';

describe('HuderumOverviewComponent', () => {
  let component: HuderumOverviewComponent;
  let fixture: ComponentFixture<HuderumOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HuderumOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HuderumOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
