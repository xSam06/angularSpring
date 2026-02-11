import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../model/project.model';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProjectService{

  private apiUrl = "http://localhost:8081/api/projects";

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]>{
  return this.http.get<Project[]>(this.apiUrl);
  }

  addProject(project: Project): Observable<Project> {
    return this.http.post<Project>
    (`${this.apiUrl}/add`,project);
  }


  uploadImage(file: File) {
    const formData = new FormData();
    formData.append('file', file);

    return this.http.post('http://localhost:8081/api/projects/upload', formData, {
      responseType: 'text'
    });
  }


}
