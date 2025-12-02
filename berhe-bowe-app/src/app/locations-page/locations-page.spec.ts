import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationsPage } from './locations-page';

describe('LocationsPage', () => {
  let component: LocationsPage;
  let fixture: ComponentFixture<LocationsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsPage]
    }).compileComponents();

    fixture = TestBed.createComponent(LocationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the locations page', () => {
    expect(component).toBeTruthy();
  });

  it('should have three locations', () => {
    expect(component.locations.length).toBe(3);
  });

  it('should include party room + pricing for each location', () => {
    component.locations.forEach(loc => {
      expect(loc.roomImage).toBeDefined();
      expect(loc.rentPrice).toBeDefined();
    });
  });

  it('should include address + phone for each location', () => {
    component.locations.forEach(loc => {
      expect(loc.address).toBeDefined();
      expect(loc.phone).toBeDefined();
    });
  });
});
