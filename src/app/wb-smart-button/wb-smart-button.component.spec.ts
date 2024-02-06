import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbSmartButtonComponent } from './wb-smart-button.component';

describe('WbSmartButtonComponent', () => {
  let component: WbSmartButtonComponent;
  let fixture: ComponentFixture<WbSmartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbSmartButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WbSmartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
