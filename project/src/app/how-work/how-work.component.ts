import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { HowWork } from '../how-works-section/how-works-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-work',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-work.component.html',
  styleUrl: './how-work.component.css'
})
export class HowWorkComponent {
   // Default values for the howWork object
  @Input("HowWork") public howWork: HowWork = {
    title: 'Pick your coffee',
    description: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
    index: '01'
  };

}
