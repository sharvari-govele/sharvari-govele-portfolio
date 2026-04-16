import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss',
})
export class ProjectComponent {
  flippedIndex: number = -1;

  projects = [
    {
      name: 'Stop Watch',
      icon: '../../../assets/stopwatch.png',
      details: 'StopWatch using angular pipe',
      url: 'https://stop-watch-angular-pipe.vercel.app/',
    },
    {
      name: 'To Do List',
      icon: '🟢',
      details: 'Keep track of your tasks using Nodejs and angular',
      url: 'https://nodejs.org',
    },
  ];

  toggleFlip(index: number) {
    this.flippedIndex = this.flippedIndex === index ? -1 : index;
  }

  openProject(url: string) {
    window.open(url, '_blank');
  }
}
