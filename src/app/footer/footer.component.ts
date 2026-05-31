import { Component } from '@angular/core';
import { SITE_CONFIG } from '../site.config';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  config = SITE_CONFIG;
}
