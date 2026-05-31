import { Component, HostListener, inject } from '@angular/core';
import { SITE_CONFIG } from '../site.config';
import { ThemeService } from '../shared/services/theme.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  config = SITE_CONFIG;
  mobileOpen = false;

  theme = inject(ThemeService);
  private router = inject(Router);

  toggleMobile() {
    this.mobileOpen = !this.mobileOpen;
  }

  mobileNavigate(event: Event, fragment: string) {
    event.preventDefault();
    event.stopPropagation();
    this.mobileOpen = false;

    if (fragment === 'projects') {
      setTimeout(() => this.router.navigate(['/projects']), 80);
      return;
    }

    setTimeout(() => {
      const el = document.getElementById(fragment);
      if (!el) return;
      const headerEl = document.querySelector('header') as HTMLElement | null;
      const headerOffset = headerEl ? headerEl.offsetHeight : 64;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      try { history.replaceState(null, '', `#${fragment}`); } catch { /* ignore */ }
    }, 80);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(_event: Event) {
    if (this.mobileOpen) {
      this.mobileOpen = false;
    }
  }
}
