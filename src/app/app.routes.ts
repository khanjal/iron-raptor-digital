import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsListComponent } from './projects/projects-list.component';
import { ProjectDetailComponent } from './projects/project-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsListComponent },
  { path: 'projects/:id', component: ProjectDetailComponent },
  { path: '**', redirectTo: '' },
];
