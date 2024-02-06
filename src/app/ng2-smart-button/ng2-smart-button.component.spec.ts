import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng2SmartButtonComponent } from './ng2-smart-button.component';

describe('Ng2SmartButtonComponent', () => {
  let component: Ng2SmartButtonComponent;
  let fixture: ComponentFixture<Ng2SmartButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng2SmartButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng2SmartButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
