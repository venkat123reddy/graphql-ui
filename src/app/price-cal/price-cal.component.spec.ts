import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCalComponent } from './price-cal.component';

describe('PriceCalComponent', () => {
  let component: PriceCalComponent;
  let fixture: ComponentFixture<PriceCalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PriceCalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriceCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
