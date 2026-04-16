import { Component } from '@angular/core';
import { CommonflagsService } from '../../commonflags.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss',
})
export class topnavComponent {
  constructor(public flag: CommonflagsService) {}
}
