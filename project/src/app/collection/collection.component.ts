import {Component, Input } from '@angular/core';
import { Collection } from '../our-collection-section/our-collection-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  // Input that will receive the collection object
  @Input("Collection") public collection: Collection = {
    title: "Gran Espresso",
    description: "gran-espresso",
    image: "Light and flavorful blend with cocoa and black pepper for an intense experience"
  };
}
