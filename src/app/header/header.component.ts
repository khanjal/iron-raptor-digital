import { Component, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SITE_CONFIG } from '../site.config';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  config = SITE_CONFIG;
  mobileOpen = signal(false);

  theme = inject(ThemeService);

  toggleMobile() {
    this.mobileOpen.set(!this.mobileOpen());
  }

  @HostListener('document:click')
  onDocumentClick() {
    this.mobileOpen.set(false);
  }
}
