import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  title: string = "Welcome to my projects; Here are some of my works, for example. You can find the rest of my work on: ";
  gitHubLink: string = "https://www.github.com/DouglasCassidy";
}
