import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  items = [
    {
      year: '2019-2023',
      name: 'Bachelor of Computer Engineering',
      university: 'Savitribai Phule Pune University',
      institute: 'Marathwada Mitra Mandal\'s Institute of Technology, Pune',
      result: '9.05 CGPA'
    },
    {
      year: '2018-2019',
      name: 'Higher Secondary Certificate Examination',
      university: 'Maharashtra State Board of Secondary & Higher Secondary Education',
      institute: 'S V Joshi High School,Dombivli',
      result: '84.77%'
    },
    {
      year: '2016-2017',
      name: 'Secondary School Certificate Examination',
      university: 'Maharashtra State Board of Secondary & Higher Secondary Education',
      institute: 'Tilak Nagar Vidya Mandir,Dombivli',
      result: '93.40%'
    }
  ]
  certificates = [
    {
      name: 'Angular - The Complete Guide',
      source: 'Udemy',
      year: '2025'
    },
    {
      name: 'The complete Sass and SCSS Course certificate',
      source: 'Udemy',
      year: '2025'
    },
    {
      name: 'Data Structures & Algorithms',
      source: 'Internshala Trainings',
      year: '2022'
    },
    {
      name: 'Machine Learning',
      source: 'Internshala Trainings',
      year: '2022'
    },
  ]
}
