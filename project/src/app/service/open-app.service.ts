import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAppService {

  /* This variable will contain the information if the app was already open or if its the first time, this will be useful when because of the header delay to show the off animations and when the hero animatians will have a delay to show, but thie hero animation if the viewport is bigger then 768 ps there will be no delay in the animation. */
  private appIsOpen: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public appIsOpen$ = this.appIsOpen.asObservable();


  /* Method to set the app os open true */
  public setAppIsOpen(): void {
    this.appIsOpen.next(true);
  }

}
