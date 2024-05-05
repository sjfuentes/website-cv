import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/project';
import { Tag } from '../_models/tag';
import { ProjectsService } from '../_services/projects.service';
import { flip } from '@popperjs/core';
import { BlobOptions } from 'buffer';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapse: boolean = true;

  filtering: boolean = false;


  typescript: boolean = false;
  angular:  boolean = false

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Santiago Fuentes - Portfolio')
  }
  
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() { 
    let filterTags: Tag[] = [];
    if (this.typescript) { 
      filterTags.push(Tag.TYPESCRIPT);
    }
    if (this.angular) { 
      filterTags.push(Tag.ANGULAR);
    }

    if (this.typescript || this.angular) {
      this.filtering = true
    } else { 
      this.filtering = false
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() { 
    this.typescript = false;
    this.angular = false;
    this.filtering = false
    this.projects = this.projectService.GetProjects()
  }
}
