import { Component } from '@angular/core';
import { TechTagComponent } from '../../shared/tech-tag/tech-tag.component';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [TechTagComponent],
  templateUrl: './approach.component.html',
})
export class ApproachComponent {
  config = SITE_CONFIG;
}
