import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './cta.component.html',
})
export class CtaComponent {
  config = SITE_CONFIG;
}
