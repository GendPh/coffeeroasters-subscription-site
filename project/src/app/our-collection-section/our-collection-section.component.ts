import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CollectionComponent } from '../collection/collection.component';
import { AnimatedComponent } from '../animated/animated.component';

export type Collection = {
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'app-our-collection-section',
  standalone: true,
  imports: [CommonModule, AnimatedComponent, CollectionComponent],
  templateUrl: './our-collection-section.component.html',
  styleUrl: './our-collection-section.component.css'
})
export class OurCollectionSectionComponent {
  /* Array that hold the collections that will be displayed */
  public collections: Collection[] = [
    {
      title: "Gran Espresso",
      image: "gran-espresso",
      description: "Light and flavorful blend with cocoa and black pepper for an intense experience"
    },
    {
      title: "Planalto",
      image: "planalto",
      description: "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts"
    },
    {
      title: "Gran Espresso",
      image: "gran-espresso",
      description: "Light and flavorful blend with cocoa and black pepper for an intense experience"
    },
    {
      title: "Gran Espresso",
      image: "gran-espresso",
      description: "Light and flavorful blend with cocoa and black pepper for an intense experience"
    }
  ];
}
