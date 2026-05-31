import { Component, inject } from '@angular/core';
import { SITE_CONFIG } from '../site.config';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.scss',
})
export class ProjectsListComponent {
  config = SITE_CONFIG;
  private router = inject(Router);

  open(title: string) {
    const id = encodeURIComponent(title.toLowerCase().replace(/\s+/g, '-'));
    this.router.navigate(['/projects', id]);
  }
}
