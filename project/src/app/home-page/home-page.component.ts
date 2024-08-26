import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeroSectionComponent } from '../hero-section/hero-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
