import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { SetTopPageService } from '../service/set-top-page.service';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.css'
})
export class AboutUsPageComponent {
  constructor(private setPageToTopService: SetTopPageService) {
    setPageToTopService.SetPageToTop();
  }
}
