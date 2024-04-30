import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {
  constructor(private titleService: Title, private redender: Renderer2) {
    this.titleService.setTitle('Santiago Fuentes - Resume')
  }
  
  DownloadFile() { 
    const link = this.redender.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/Resume.pdf');
    link.setAttribute('download', 'Resume.pdf')
    link.click();
    link.remove();
  }
}
