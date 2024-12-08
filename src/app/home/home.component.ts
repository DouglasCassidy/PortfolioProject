import { Component } from '@angular/core';
import {IMAGE_LOADER, ImageLoaderConfig, NgOptimizedImage, provideImgixLoader} from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  introText: string = "Hello, my name Douglas. I'm a student, currently learning at St. Clair College.\n" + "I am currently enrolled in the Mobile application development program. I have used multiple\n" + "languages, such as Java, Typescript, JavaScript, PHP, Python.";
  skillsText: string = "I have programming skills to create to develop a JavaFx program by using the JavaFX library.\n" + "What makes me stand out is my ability to learn quickly and adapt to new technologies,\n" + "and my ability to work well in a team environment.";
  careerText: string = "My goal for my career is to possibly get a full-time position in the backend development field. And\n" + "to use my previously learned skills to create a mobile application effectively, and efficiently.\n"
}
