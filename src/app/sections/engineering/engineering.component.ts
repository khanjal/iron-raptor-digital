import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-engineering',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './engineering.component.html',
})
export class EngineeringComponent {
  eng = SITE_CONFIG.engineering;
}
