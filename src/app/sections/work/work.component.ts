import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TechTagComponent } from '../../shared/tech-tag/tech-tag.component';
import { SITE_CONFIG } from '../../site.config';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-work',
  standalone: true,
  imports: [RouterLink, IconComponent, TechTagComponent],
  templateUrl: './work.component.html',
})
export class WorkComponent {
  config = SITE_CONFIG;
}
