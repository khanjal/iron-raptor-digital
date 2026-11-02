import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [],
  templateUrl: './approach.component.html',
})
export class ApproachComponent {
  config = SITE_CONFIG;
}
