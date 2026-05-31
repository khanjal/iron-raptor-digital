import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
})
export class TestimonialsComponent {
  config = SITE_CONFIG;

  /** Returns the initials (up to 2 chars) from a display name. */
  initials(name: string): string {
    return name
      .split(' ')
      .map(w => w[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }

  /** Returns an array of length `rating` for @for star rendering. */
  stars(rating: number): number[] {
    return Array.from({ length: Math.min(5, Math.max(1, rating)) });
  }
}
