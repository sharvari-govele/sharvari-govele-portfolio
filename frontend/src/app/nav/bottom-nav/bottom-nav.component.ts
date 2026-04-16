import { Component, HostListener } from '@angular/core';
import { CommonflagsService } from '../../commonflags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss',
})
export class bottomnavComponent {
  showNav: boolean = false;

  constructor(
    public flag: CommonflagsService,
    public router: Router,
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showNav = window.pageYOffset > window.innerHeight * 0.5;
  }
}
