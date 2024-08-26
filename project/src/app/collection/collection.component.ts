import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { Collection } from '../our-collection-section/our-collection-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent implements AfterViewInit {
  // Input that will receive the collection object
  @Input("Collection") public collection: Collection = {
    title: "Gran Espresso",
    description: "gran-espresso",
    image: "Light and flavorful blend with cocoa and black pepper for an intense experience"
  };

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
      // Set the threshold to 0.5 so the element will be considered in the viewport when 50% of it is visible
      { threshold: 0.5 }
    );
    // Observe the element
    observer.observe(this.elementRef.nativeElement);
  }
}
