import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  config = SITE_CONFIG;
}
