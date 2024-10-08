import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { SetTopPageService } from '../service/set-top-page.service';

@Component({
  selector: 'app-plan-page',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './plan-page.component.html',
  styleUrl: './plan-page.component.css'
})
export class PlanPageComponent {
  constructor(private setPageToTopService: SetTopPageService) {
    setPageToTopService.SetPageToTop();
  }
}
