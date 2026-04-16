import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './container/contact/contact.component';
import { ContainerComponent } from './container/container.component';
import { EducationComponent } from './container/education/education.component';
import { ExperienceComponent } from './container/experience/experience.component';
import { HomeComponent } from './container/home/home.component';
import { NotfoundComponent } from './container/notfound/notfound.component';
import { ProjectComponent } from './container/project/project.component';
import { bottomnavComponent } from './nav/bottom-nav/bottom-nav.component';
import { topnavComponent } from './nav/top-nav/top-nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    topnavComponent,
    bottomnavComponent,
    ContainerComponent,
    NotfoundComponent,
    HomeComponent,
    ProjectComponent,
    ContactComponent,
    ExperienceComponent,
    EducationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [provideHttpClient(), provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
