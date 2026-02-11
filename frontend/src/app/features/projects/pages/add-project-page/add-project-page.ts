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

   projectGroup = new FormGroup({
    title: new FormControl('',{nonNullable : true,validators : [Validators.required]}),
    description: new FormControl('',{nonNullable : true}),
    url: new FormControl('',{nonNullable : true, validators : [Validators.required]}),
    imageUrl: new FormControl('',{nonNullable : true})
  });

  //upload image
  selectedFile!: File;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }


  constructor(
    private projectService: ProjectService,
    private router: Router
  ) {}

  submit() {

    if (this.selectedFile) {

      this.projectService.uploadImage(this.selectedFile).subscribe(imagePath => {

        // On met à jour seulement imageUrl
        this.projectGroup.patchValue({
          imageUrl: imagePath
        });
        this.projectService.addProject(this.projectGroup.getRawValue()).subscribe(() => {
          this.router.navigate(['/projects']);
        });

      });

    }
  }


}


