import {Component, OnInit} from '@angular/core';
import {Project} from '../../../../model/project.model';
import {ProjectService} from '../../../../service/project.service';
import {CommonModule} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-project-page',
  imports: [CommonModule],
  templateUrl: './project-page.html',
  styleUrl: './project-page.css',
})
export class ProjectPage {

  projects$: Observable<Project[]>;

  constructor(private projectService: ProjectService) {
    this.projects$ = this.projectService.getProjects();
  }
}
