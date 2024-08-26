import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { Reasons } from '../why-choose-us-section/why-choose-us-section.component';

@Component({
  selector: 'app-reason',
  standalone: true,
  imports: [],
  templateUrl: './reason.component.html',
  styleUrl: './reason.component.css'
})
export class ReasonComponent implements AfterViewInit {
  @Input("Reason") public reason: Reasons = {
    title: "Best quality",
    description: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    icon: "coffee-bean"
  }

  public inView: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inView = true;
          observer.unobserve(this.elementRef.nativeElement);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(this.elementRef.nativeElement);
  }

}
