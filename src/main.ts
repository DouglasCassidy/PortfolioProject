import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {HomeComponent} from './app/home/home.component';
import {ContactComponent} from './app/contact/contact.component';
import {ProjectsComponent} from './app/projects/projects.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'contact', component: ContactComponent}
]

bootstrapApplication(AppComponent , {
  providers: [provideRouter(routes)]
}).then(r => console.log(r));
