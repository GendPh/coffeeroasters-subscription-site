import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { HowWorkComponent } from '../how-work/how-work.component';
import { BtnComponent } from '../btn/btn.component';
import { AnimatedComponent } from '../animated/animated.component';

export type HowWork = {
  title: string;
  description: string;
  index: string;
}


@Component({
  selector: 'app-how-works-section',
  standalone: true,
  imports: [CommonModule, HowWorkComponent, BtnComponent, AnimatedComponent],
  templateUrl: './how-works-section.component.html',
  styleUrl: './how-works-section.component.css'
})
export class HowWorksSectionComponent implements AfterViewInit {

  // Default values for the howWorks object array
  public howWorks: HowWork[] = [
    {
      title: 'Pick your coffee',
      description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
      index: '01'
    },
    {
      title: 'Choose the frequency',
      description: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
      index: '02'
    },
    {
      title: 'Receive and enjoy!',
      description: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
      index: '03'
    }
  ];
  // Default values for the firstBubbleView, firstLineView, secondBubbleView, SecondLineView, thirdBubbleView

  public firstLineView: boolean = false;
  public SecondLineView: boolean = false;
  public thirdBubbleView: boolean = false;

  // Constructor for the elementRef
  constructor(private elementRef: ElementRef) { }

  // AfterViewInit method
  ngAfterViewInit(): void {
    // IntersectionObserver to check if the element is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the element is in view, set inView to true
        if (entry.isIntersecting) {
          // Unobserve the element after it is in view 
          observer.unobserve(this.elementRef.nativeElement);

          // Set the firstBubbleView, firstLineView, secondBubbleView, SecondLineView, thirdBubbleView to true after a certain amount of time
          this.firstLineView = true;

          setTimeout(() => {
            this.SecondLineView = true;
          }, 650);

        }
      },
      // Options for the IntersectionObserver to check if the element is in view by 50%
      { threshold: 0.5 }
    );

    // Observe the element 
    observer.observe(this.elementRef.nativeElement);
  }



  WorkComponentDelay(index: number): any {
    if (index === 0 && window.innerWidth >= 768) {
      return 0;
      // If the howWork index is 02 and the window width is greater than 768, set inView to true
    } else if (index === 1 && window.innerWidth >= 768) {
      return 600;
      // If the howWork index is 03 and the window width is greater than 768, set inView to true
    } else if (index === 2 && window.innerWidth >= 768) {
      return 1200;
    } else {
      return 0;
    }
  }
}
