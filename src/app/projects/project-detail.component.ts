import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../site.config';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss',
})
export class ProjectDetailComponent {
  config = SITE_CONFIG;
  project: any = null;

  private route = inject(ActivatedRoute);

  constructor() {
    const raw = this.route.snapshot.paramMap.get('id') || '';
    const id = decodeURIComponent(raw);
    const slug = (s: string) => s.toLowerCase().replace(/\s+/g, '-');
    this.project = this.config.services.find((p: any) => slug(p.title) === id) || null;
  }
}
