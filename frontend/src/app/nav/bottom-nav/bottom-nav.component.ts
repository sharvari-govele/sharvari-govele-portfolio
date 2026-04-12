import { Component, OnInit } from '@angular/core';
import { CommonflagsService } from '../../commonflags.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.scss'
})
export class bottomnavComponent{
  showBtn: boolean = true
  constructor(public flag: CommonflagsService, public router: Router) {  }

}
