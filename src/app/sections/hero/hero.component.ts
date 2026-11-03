import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../../site.config';
import { IconComponent } from '../../shared/icon/icon.component';
import { SNIPPETS, highlight } from './snippets';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, IconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  config = SITE_CONFIG;
  snippet = SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)];
  code = highlight(this.snippet);
}
