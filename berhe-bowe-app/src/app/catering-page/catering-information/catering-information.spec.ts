import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringInformation } from './catering-information';

describe('CateringInformation', () => {
  let component: CateringInformation;
  let fixture: ComponentFixture<CateringInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CateringInformation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CateringInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
