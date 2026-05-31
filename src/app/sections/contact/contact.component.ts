import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  config = SITE_CONFIG;

  isSubmitting = signal(false);
  submitted = signal(false);
  submitError = signal(false);

  form = this.fb.nonNullable.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  fieldInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl.touched);
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, message } = this.form.value;

    // Mailto fallback when no Formspree ID is configured
    if (!this.config.contact.formspreeId) {
      const subject = encodeURIComponent(`Contact from ${name ?? ''}`);
      const body    = encodeURIComponent(message ?? '');
      const to      = this.config.social.email ?? '';
      window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
      return;
    }

    this.isSubmitting.set(true);
    this.submitError.set(false);

    try {
      const response = await fetch(
        `https://formspree.io/f/${this.config.contact.formspreeId}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      if (response.ok) {
        this.submitted.set(true);
        this.form.reset();
      } else {
        this.submitError.set(true);
      }
    } catch {
      this.submitError.set(true);
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
