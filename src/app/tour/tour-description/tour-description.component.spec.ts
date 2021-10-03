import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDescriptionComponent } from './tour-description.component';

describe('TourDescriptionComponent', () => {
  let component: TourDescriptionComponent;
  let fixture: ComponentFixture<TourDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
