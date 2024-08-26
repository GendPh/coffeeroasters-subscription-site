import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';
import { OurCollectionSectionComponent } from '../our-collection-section/our-collection-section.component';
import { WhyChooseUsSectionComponent } from '../why-choose-us-section/why-choose-us-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, OurCollectionSectionComponent,WhyChooseUsSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
