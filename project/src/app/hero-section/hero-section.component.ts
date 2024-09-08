import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OpenAppService } from '../service/open-app.service';
import { AnimatedComponent } from '../animated/animated.component';



@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, BtnComponent, AnimatedComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {

  // Input that will receive the page name to display the correct content for each page
  @Input("Page") public page: string = "home";
  // Input that will receive the tittle size to display the correct title size
  @Input("TittleSmall") public isTittleSmall: boolean = true;
  @Input("Tittle") public tittle: string = "Great coffee made simple.";
  // Input that will receive the description to display the correct description
  @Input("Description") public description: string = "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.";
  @Input("AsBtn") public asBtn: boolean = false;

  // Variable that will be used to check if the app is already open to avoid unnecessary animations
  public isAppAlreadyOpen: boolean = false;
  // Variable that will be used to check if the element is in the viewport
  public inViewport: boolean = false;


  // Constructor that will inject the elementRef and the openAppService
  constructor(private elementRef: ElementRef, private openAppService: OpenAppService) {
    // Subscribe to the appIsOpen$ observable to check if the app is already open
    this.openAppService.appIsOpen$.subscribe((isOpen) => {
      this.isAppAlreadyOpen = isOpen;
    });
  }

  // AfterViewInit lifecycle hook that will be called after the component view has been initialized
  ngAfterViewInit(): void {
    // Check if the app is already open or the window width is greater than 768
    if (!this.isAppAlreadyOpen || window.innerWidth > 768) {
      // Call the AnimateElement method
      this.AnimateElement();
      // Set the app as open to avoid unnecessary animations
      this.openAppService.setAppIsOpen();
    } else {
      // If the app is already open and the window width is less than 768, wait 450ms and call the AnimateElement method
      setTimeout(() => {
        this.AnimateElement();
      }, 450);
    }
  }

  // Method that will animate the element when it is in the viewport
  private AnimateElement(): void {
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
