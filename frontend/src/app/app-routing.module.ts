import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './container/contact/contact.component';
import { EducationComponent } from './container/education/education.component';
import { ExperienceComponent } from './container/experience/experience.component';
import { HomeComponent } from './container/home/home.component';
import { NotfoundComponent } from './container/notfound/notfound.component';
import { ProjectComponent } from './container/project/project.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'home', component: HomeComponent },
  { path: 'project', component: ProjectComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
