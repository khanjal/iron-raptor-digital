import { Component, inject } from '@angular/core';
import { SITE_CONFIG } from '../site.config';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
  config = SITE_CONFIG;
}
