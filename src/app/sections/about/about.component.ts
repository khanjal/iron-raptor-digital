import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  config = SITE_CONFIG;
}
