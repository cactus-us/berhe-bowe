import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringOrder } from './catering-order';

describe('CateringOrder', () => {
  let component: CateringOrder;
  let fixture: ComponentFixture<CateringOrder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CateringOrder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateringOrder);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
