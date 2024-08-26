import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MobileNavComponent } from '../mobile-nav/mobile-nav.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isMobileNavOpen: boolean = false;

  public toggleMobileNav(): void {
    this.isMobileNavOpen = !this.isMobileNavOpen;
    this.bodyOverflowHidden();
  }
  public closeMobileNav(): void {
    this.isMobileNavOpen = false;
    this.bodyOverflowHidden();
  }

  private bodyOverflowHidden(): void {
    const bodyElement: HTMLElement = document.querySelector("body") as HTMLElement;
    if (bodyElement.classList.contains("overflow-hidden")) {
      setTimeout(() => {
        bodyElement.classList.remove("overflow-hidden");
      }, 650);
    } else {
      bodyElement.classList.add("overflow-hidden");
    }
  }
}
