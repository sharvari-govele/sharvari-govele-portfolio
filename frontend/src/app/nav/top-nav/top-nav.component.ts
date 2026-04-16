import { Component } from '@angular/core';
import { CommonflagsService } from '../../commonflags.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class topnavComponent {
  constructor(public flag: CommonflagsService) { }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const navHeight = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}
