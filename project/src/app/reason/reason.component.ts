import { Component, Input } from '@angular/core';
import { Reasons } from '../why-choose-us-section/why-choose-us-section.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reason',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reason.component.html',
  styleUrl: './reason.component.css'
})
export class ReasonComponent {
  @Input("Reason") public reason: Reasons = {
    title: "Best quality",
    description: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
    icon: "coffee-bean"
  };
}
