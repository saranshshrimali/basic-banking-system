import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallcustomerComponent } from './viewallcustomer.component';

describe('ViewallcustomerComponent', () => {
  let component: ViewallcustomerComponent;
  let fixture: ComponentFixture<ViewallcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewallcustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
