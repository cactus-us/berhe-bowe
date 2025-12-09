import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringOrderButton } from './catering-order-button';

describe('CateringOrderButton', () => {
  let component: CateringOrderButton;
  let fixture: ComponentFixture<CateringOrderButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CateringOrderButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateringOrderButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
