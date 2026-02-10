import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Project} from '../../../../model/project.model';
import {ProjectService} from '../../../../service/project.service';

@Component({
  selector: 'app-add-project',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: '../add-project-page/add-project-page.html',
})
export class AddProjectPage {

  //déclaration du groupe du formulaire

  readonly projectGroup = new FormGroup({
    title: new FormControl('',{nonNullable : true,validators : [Validators.required]}),
    description: new FormControl('',{nonNullable : true}),
    url: new FormControl('',{nonNullable : true, validators : [Validators.required]}),
    imageUrl: new FormControl('',{nonNullable : true})
  });


  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  submit() {

    //On vérifie si le formulaire est valide selon les validators en place
    if(this.projectGroup.valid){

      //on pose une variable pour récupérer le JSON avec getRawValue()
      const projectData = this.projectGroup.getRawValue();

      //Dans ce cas soit on ajoute à la bdd soit on souleve une erreur

      this.projectService.addProject(projectData).subscribe({
        next: () => {
          this.router.navigate(['/projects']);
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout :', err);
        }
      });
    }
  }

}


