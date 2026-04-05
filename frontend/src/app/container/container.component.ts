import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonflagsService } from '../commonflags.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
constructor(private ref:ElementRef,public flag:CommonflagsService){

}
@HostListener('document:click',['$event'])
handleClickOutside(event:Event){
  if(this.ref.nativeElement.contains(event?.target)){
    this.flag.navopen=!this.flag.navopen
  }
}
}
