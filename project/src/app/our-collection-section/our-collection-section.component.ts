import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { CollectionComponent } from '../collection/collection.component';

export type Collection = {
  title: string;
  description: string;
  image: string;
};

@Component({
  selector: 'app-our-collection-section',
  standalone: true,
  imports: [CommonModule, CollectionComponent],
  templateUrl: './our-collection-section.component.html',
  styleUrl: './our-collection-section.component.css'
})
export class OurCollectionSectionComponent implements AfterViewInit {
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
  // Variable that will be used to check if the element is in the viewport
  public inViewport: boolean = false;

  // Constructor that will inject the elementRef
  constructor(private elementRef: ElementRef) { }

  // AfterViewInit lifecycle hook that will be called after the component view has been initialized
  ngAfterViewInit(): void {
    // Create a new IntersectionObserver instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Check if the element is in the viewport and set the inViewport variable to true
        if (entry.isIntersecting) {
          this.inViewport = true;
          // Stop observing the element once it is in the viewport to avoid unnecessary checks and updates
          observer.unobserve(this.elementRef.nativeElement);
        }
      },
      // Set the threshold to 0.1 so the element will be considered in the viewport when 10% of it is visible
      { threshold: 0.1 }
    );
    // Observe the element that is being rendered
    observer.observe(this.elementRef.nativeElement);
  }

}
