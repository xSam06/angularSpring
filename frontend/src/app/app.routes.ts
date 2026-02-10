import { Routes } from '@angular/router';
import {ProjectPage} from './features/projects/pages/project-page/project-page';
import {AddProjectPage} from './features/projects/pages/add-project-page/add-project-page';

export const routes: Routes = [
  { path: 'projects', component: ProjectPage },
  { path:'projects/add', component:AddProjectPage }
];
