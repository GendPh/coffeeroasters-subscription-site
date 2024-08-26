import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCollectionSectionComponent } from './our-collection-section.component';

describe('OurCollectionSectionComponent', () => {
  let component: OurCollectionSectionComponent;
  let fixture: ComponentFixture<OurCollectionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCollectionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCollectionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
