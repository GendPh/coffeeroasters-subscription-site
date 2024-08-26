import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { OpenAppService } from '../service/open-app.service';



@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, BtnComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements AfterViewInit {

  @Input("Page") public page: string = "home";
  @Input("TittleSmall") public isTittleSmall: boolean = true;
  @Input("Tittle") public tittle: string = "Great coffee made simple.";
  @Input("Description") public description: string = "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.";
  @Input("AsBtn") public asBtn: boolean = false;

  public isAppAlreadyOpen: boolean = false;
  public inViewport: boolean = false;


  constructor(private elementRef: ElementRef, private openAppService: OpenAppService) {
    this.openAppService.appIsOpen$.subscribe((isOpen) => {
      this.isAppAlreadyOpen = isOpen;
    });
  }


  ngAfterViewInit(): void {
    if (!this.isAppAlreadyOpen || window.innerWidth > 768) {
      this.AnimateElement();
      this.openAppService.setAppIsOpen();
    } else {
      setTimeout(() => {
        this.AnimateElement();
      }, 450);
    }
  }

  private AnimateElement(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.inViewport = true;
          observer.unobserve(this.elementRef.nativeElement);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(this.elementRef.nativeElement);
  }
}
