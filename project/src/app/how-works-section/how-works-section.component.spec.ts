import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWorksSectionComponent } from './how-works-section.component';

describe('HowWorksSectionComponent', () => {
  let component: HowWorksSectionComponent;
  let fixture: ComponentFixture<HowWorksSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowWorksSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HowWorksSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
