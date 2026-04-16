import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Tata Consultancy Services',
      role: 'System Engineer',
      project: 'SBI YONO2',
      duration: 'Oct 2023 – Present',
      description: [
        'Developed banking web applications using Angular, TypeScript, and RxJS.',
        'Collaborated with backend teams to integrate APIs for transaction management.',
        'Wrote unit tests using Jasmine and Karma to ensure code quality.',
        'Resolved critical production issues, improving system stability.',
      ],
      tech: ['Angular', 'TypeScript', 'RxJS', 'Jasmine', 'Karma', 'Git', 'CMS'],
    },
    {
      company: 'LetsGrowMore',
      role: 'Data Science Intern',
      duration: 'Apr 2022 - May 2022',
      description: ['Learnt about various python libraries and ML algorithms.'],
      tech: ['Python', 'Machine Learning', 'Computer Vision', 'Google Colab'],
    },
    {
      company: 'Oasis Infobyte',
      role: 'Web Developer Intern',
      duration: 'Feb 2022 - Mar 2022',
      description: ['Designed and developed dynamic and responsive websites.'],
      tech: ['HTML', 'CSS', 'JavaScript', 'GitHub'],
    },
  ];
}
