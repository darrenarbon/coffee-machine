import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDrinkButtonComponent } from './hot-drink-button.component';

describe('HotDrinkButtonComponent', () => {
  let component: HotDrinkButtonComponent;
  let fixture: ComponentFixture<HotDrinkButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotDrinkButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotDrinkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
