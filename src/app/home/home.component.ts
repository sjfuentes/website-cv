import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredProjects = {} as Project;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Santiago Fuentes - Home')
   }
  ngOnInit(): void {
    this.featuredProjects = this.projectService.GetProejectById(0);
  }
}
