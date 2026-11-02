import { Component } from '@angular/core';
import { HeroComponent } from '../sections/hero/hero.component';
import { ServicesComponent } from '../sections/services/services.component';
import { WorkComponent } from '../sections/work/work.component';
import { ApproachComponent } from '../sections/approach/approach.component';
import { AboutComponent } from '../sections/about/about.component';
import { CtaComponent } from '../sections/cta/cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, ServicesComponent, WorkComponent, ApproachComponent, AboutComponent, CtaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
