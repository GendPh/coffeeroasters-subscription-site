import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { OurCollectionSectionComponent } from '../our-collection-section/our-collection-section.component';
import { WhyChooseUsSectionComponent } from '../why-choose-us-section/why-choose-us-section.component';
import { HowWorksSectionComponent } from '../how-works-section/how-works-section.component';
import { SetTopPageService } from '../service/set-top-page.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, OurCollectionSectionComponent, WhyChooseUsSectionComponent, HowWorksSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private setPageToTopService: SetTopPageService) {
    setPageToTopService.SetPageToTop();
   }
}
