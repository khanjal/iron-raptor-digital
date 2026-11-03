import { Component, computed, input } from '@angular/core';

// Tag label → logo file in public/tech/. Labels without an entry render as text only.
// Logos come from Devicon (MIT) and Simple Icons (CC0: googlesheets, proxmox, pwa, ubiquiti);
// the AWS and NuGet colors are lightened slightly so they read in dark mode.
const LOGOS: Record<string, string> = {
  'Angular':           'angular',
  'TypeScript':        'typescript',
  'Tailwind CSS':      'tailwindcss',
  'C#':                'csharp',
  'C# Lambda':         'csharp',
  '.NET Core':         'dotnetcore',
  '.NET 8':            'dotnetcore',
  'ASP.NET MVC':       'dotnetcore',
  'ASP.NET Identity':  'dotnetcore',
  'Entity Framework':  'entityframeworkcore',
  'NuGet':             'nuget',
  'AWS':               'amazonwebservices',
  'AWS Amplify':       'amazonwebservices',
  'AWS Lambda':        'amazonwebservices',
  'API Gateway':       'amazonwebservices',
  'S3':                'amazonwebservices',
  'CloudWatch':        'amazonwebservices',
  'DynamoDB':          'dynamodb',
  'Google Sheets API': 'googlesheets',
  'GitHub Actions':    'githubactions',
  'Jasmine & Karma':   'jasmine',
  'Proxmox':           'proxmox',
  'UniFi':             'ubiquiti',
  'PWA':               'pwa',
  'Java':              'java',
  'JUnit':             'junit',
};

@Component({
  selector: 'app-tech-tag',
  standalone: true,
  host: { class: 'inline-flex items-center gap-1.5' },
  template: `
    @if (logo(); as src) {
      <img [src]="src" alt="" width="14" height="14" class="h-3.5 w-3.5 shrink-0 object-contain" />
    }
    {{ name() }}
  `,
})
export class TechTagComponent {
  name = input.required<string>();
  logo = computed(() => {
    const file = LOGOS[this.name()];
    return file ? `tech/${file}.svg` : null;
  });
}
