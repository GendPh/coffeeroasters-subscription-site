import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-animated',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './animated.component.html',
  styleUrl: './animated.component.css'
})
export class AnimatedComponent implements AfterViewInit, OnDestroy {
  @Input("Animation") public animation = "fadeIn";
  @Input("Delay") public delay: number = 0;  // Delay in milliseconds (number)
  public inViewport: boolean = false;
  public shouldAnimate: boolean = false; // To trigger animation after delay


  // List of available animations
  public animations: any = {
    fadeIn: "fadeIn",
    fadeInUp: "fadeInUp",
    fadeInDown: "fadeInDown",
    fadeInLeft: "fadeInLeft",
    fadeInRight: "fadeInRight",
    fadeInUpBig: "fadeInUpBig",
    fadeInDownBig: "fadeInDownBig",
    fadeInLeftBig: "fadeInLeftBig",
    fadeInRightBig: "fadeInRightBig",
    bounceIn: "bounceIn",
    bounceInUp: "bounceInUp",
    bounceInDown: "bounceInDown",
    bounceInLeft: "bounceInLeft",
    bounceInRight: "bounceInRight",
    rotateIn: "rotateIn",
    rotateInUpLeft: "rotateInUpLeft",
    rotateInDownLeft: "rotateInDownLeft",
    rotateInUpRight: "rotateInUpRight",
    rotateInDownRight: "rotateInDownRight",
    lightSpeedIn: "lightSpeedIn",
    lightSpeedInRight: "lightSpeedInRight",
    lightSpeedInLeft: "lightSpeedInLeft",
    flipInX: "flipInX",
    flipInY: "flipInY",
    zoomIn: "zoomIn",
    zoomInUp: "zoomInUp",
    zoomInDown: "zoomInDown",
    zoomInLeft: "zoomInLeft",
    zoomInRight: "zoomInRight",
    slideInUp: "slideInUp",
    slideInDown: "slideInDown",
    slideInLeft: "slideInLeft",
    slideInRight: "slideInRight",
    rollIn: "rollIn",
    heartBeat: "heartBeat",
    pulse: "pulse",
    shake: "shake",
    swing: "swing",
    tada: "tada",
    wobble: "wobble",
    jello: "jello",
    bounce: "bounce",
    flash: "flash",
    rubberBand: "rubberBand",
    headShake: "headShake",
    hinge: "hinge",
    jackInTheBox: "jackInTheBox",
    rollOut: "rollOut",
    lightSpeedOut: "lightSpeedOut",
    rotateOut: "rotateOut",
    rotateOutUpLeft: "rotateOutUpLeft",
    rotateOutDownLeft: "rotateOutDownLeft",
    rotateOutUpRight: "rotateOutUpRight",
  };

  // Intersection Observer API to check if the element is in the viewport
  private observer: IntersectionObserver | null = null;
  private delayTimeout: any = null;


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.setupIntersectionObserver();
  }




  // Setup the Intersection Observer API to check if the element is in the viewport 
  private setupIntersectionObserver() {
    // Create a new Intersection Observer with a callback function and options
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.triggerAnimationWithDelay();
            // Unobserve the element to avoid unnecessary checks and updates
            this.observer!.unobserve(this.el.nativeElement);
          } else {
            this.resetAnimation();
          }
        });
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is in the viewport
    );
    // Observe the element if it exists
    if (this.el && this.el.nativeElement) {
      this.observer.observe(this.el.nativeElement);
    }
  }

  // Trigger animation with a delay
  private triggerAnimationWithDelay() {
    if (this.delay === 0) {
      this.shouldAnimate = true;
    } else {
      this.delayTimeout = setTimeout(() => {
        this.shouldAnimate = true;
      }, this.delay);
    }
  }

  private resetAnimation() {
    this.shouldAnimate = false;
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }
  // Dynamically generate the class string
  get elementClass() {
    let animation: string = this.animations[this.animation];
    return this.shouldAnimate ? 'animate__animated animate__' + animation : 'opacity-0';
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
  }
}