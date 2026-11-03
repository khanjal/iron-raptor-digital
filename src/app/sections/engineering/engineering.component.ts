import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-engineering',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './engineering.component.html',
})
export class EngineeringComponent {
  eng = SITE_CONFIG.engineering;
}
