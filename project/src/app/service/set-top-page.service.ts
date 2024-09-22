import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetTopPageService {
  public SetPageToTop(): void {
    let scrollToTop = window.setInterval(() => {
      let pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // Adjust the value 20 to control the scroll speed
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16); // Adjust the value 16 to control the scroll interval
  }
}
