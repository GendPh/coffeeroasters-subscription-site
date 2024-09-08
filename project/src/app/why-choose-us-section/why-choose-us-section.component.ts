import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { ReasonComponent } from '../reason/reason.component';
import { AnimatedComponent } from '../animated/animated.component';

export type Reasons = {
  title: string;
  description: string;
  icon: string;
};

@Component({
  selector: 'app-why-choose-us-section',
  standalone: true,
  imports: [CommonModule, ReasonComponent, AnimatedComponent],
  templateUrl: './why-choose-us-section.component.html',
  styleUrl: './why-choose-us-section.component.css'
})
export class WhyChooseUsSectionComponent {
  // Array of reasons to choose us
  public reasons: Reasons[] = [
    {
      title: "Best quality",
      description: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
      icon: "quality"
    },
    {
      title: "Exclusive benefits",
      description: "Special offers and swag when you subscribe, including 30% off your first shipment.",
      icon: "gift"
    },
    {
      title: "Free shipping",
      description: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
      icon: "truck"
    }
  ];
}
