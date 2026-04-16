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
      name: 'StopWatch',
      icon: '../../../assets/stopwatch.png',
      details: 'StopWatch using angular pipe',
      url: 'https://stop-watch-angular-pipe.vercel.app/',
    },
    {
      name: 'Node.js',
      icon: '🟢',
      details: 'Developed RESTful APIs...',
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
