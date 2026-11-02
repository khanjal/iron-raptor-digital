import { Component } from '@angular/core';
import { SITE_CONFIG } from '../../site.config';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './cta.component.html',
})
export class CtaComponent {
  config = SITE_CONFIG;
}
