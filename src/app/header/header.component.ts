import { Component, HostListener, OnDestroy, inject, signal } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
export class HeaderComponent implements OnDestroy {
  config = SITE_CONFIG;
  mobileOpen = signal(false);

  theme = inject(ThemeService);
  private router = inject(Router);
  private doc = inject(DOCUMENT);
  private navTimer: ReturnType<typeof setTimeout> | null = null;

  ngOnDestroy(): void {
    if (this.navTimer) clearTimeout(this.navTimer);
  }

  toggleMobile() {
    this.mobileOpen.set(!this.mobileOpen());
  }

  mobileNavigate(event: Event, fragmentOrPath: string) {
    event.preventDefault();
    event.stopPropagation();
    this.mobileOpen.set(false);

    if (this.navTimer) clearTimeout(this.navTimer);

    if (fragmentOrPath && fragmentOrPath.startsWith('/')) {
      this.navTimer = setTimeout(() => this.router.navigate([fragmentOrPath]), 80);
      return;
    }

    const fragment = fragmentOrPath;
    this.navTimer = setTimeout(() => {
      const el = this.doc.getElementById(fragment);
      if (!el) return;
      const headerEl = this.doc.querySelector('header') as HTMLElement | null;
      const headerOffset = headerEl ? headerEl.offsetHeight : 64;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      try { history.replaceState(null, '', `#${fragment}`); } catch { /* ignore */ }
    }, 80);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(_event: Event) {
    if (this.mobileOpen()) {
      this.mobileOpen.set(false);
    }
  }
}
