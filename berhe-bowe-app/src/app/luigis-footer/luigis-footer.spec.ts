import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuigisFooter } from './luigis-footer';

describe('LuigisFooter', () => {
  let component: LuigisFooter;
  let fixture: ComponentFixture<LuigisFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LuigisFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuigisFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
