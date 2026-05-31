import { Injectable, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export type ThemePreference = 'light' | 'dark' | 'system';
export type ResolvedTheme   = 'light' | 'dark';

const STORAGE_KEY = 'theme-preference';

/**
 * Lightweight theme service — no external dependencies.
 * Persists preference to localStorage and applies 'theme-dark' class to <html>.
 * Tailwind's `darkMode: 'class'` strategy picks up 'html.theme-dark'.
 */
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private document = inject(DOCUMENT);
  private mediaQuery: MediaQueryList | null = null;

  private _preference: ThemePreference = 'system';
  private _resolved:   ResolvedTheme   = 'light';

  get preference(): ThemePreference { return this._preference; }
  get resolved():   ResolvedTheme   { return this._resolved;   }

  initialize(): void {
    const stored = this.getStored();
    this.apply(stored ?? 'system', false);
  }

  setTheme(preference: ThemePreference): void {
    this.apply(preference);
  }

  toggle(): void {
    const next = this._resolved === 'dark' ? 'light' : 'dark';
    this.apply(next);
  }

  // ── Private helpers ────────────────────────────────────────────────────────

  private apply(preference: ThemePreference, persist = true): void {
    this._preference = preference;
    this._resolved   = this.resolve(preference);

    const html = this.document.documentElement;
    if (this._resolved === 'dark') {
      html.classList.add('theme-dark');
    } else {
      html.classList.remove('theme-dark');
    }

    this.updateMetaColor();

    if (persist) {
      try { localStorage.setItem(STORAGE_KEY, preference); } catch { /* SSR / private mode */ }
    }

    this.syncMediaListener(preference);
  }

  private resolve(preference: ThemePreference): ResolvedTheme {
    if (preference === 'dark')  return 'dark';
    if (preference === 'light') return 'light';
    return this.systemPrefersDark() ? 'dark' : 'light';
  }

  private systemPrefersDark(): boolean {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private syncMediaListener(preference: ThemePreference): void {
    if (typeof window === 'undefined') return;

    if (preference === 'system') {
      if (!this.mediaQuery) {
        this.mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        this.mediaQuery.addEventListener('change', () => this.apply('system', false));
      }
    } else {
      this.mediaQuery?.removeEventListener('change', () => {});
      this.mediaQuery = null;
    }
  }

  private updateMetaColor(): void {
    const color = this._resolved === 'dark' ? '#111111' : '#ffffff';
    let meta = this.document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
    if (!meta) {
      meta = this.document.createElement('meta');
      meta.setAttribute('name', 'theme-color');
      this.document.head.appendChild(meta);
    }
    meta.setAttribute('content', color);
  }

  private getStored(): ThemePreference | null {
    try {
      const v = localStorage.getItem(STORAGE_KEY) as ThemePreference | null;
      return (v === 'light' || v === 'dark' || v === 'system') ? v : null;
    } catch { return null; }
  }
}
