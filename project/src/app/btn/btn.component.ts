import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';
import { AnimatedComponent } from '../animated/animated.component';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule, RouterLink,AnimatedComponent],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
}
