import { Component } from '@angular/core';
import { CommonflagsService } from './commonflags.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(public flag:CommonflagsService){

  }
}
