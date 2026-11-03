import { Component } from '@angular/core';
import { TechTagComponent } from '../shared/tech-tag/tech-tag.component';
import { SITE_CONFIG } from '../site.config';
import { IconComponent } from '../shared/icon/icon.component';
import { CtaComponent } from '../sections/cta/cta.component';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [IconComponent, CtaComponent, TechTagComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
  config = SITE_CONFIG;
}
