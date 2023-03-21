import { trigger } from '@angular/animations';
import { Dropdown } from 'materialize-css';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  implements AfterViewInit{
  
  @ViewChild('dropdownTrigger') dropdownTrigger!: ElementRef;
  
  ngAfterViewInit() {
    Dropdown.init(this.dropdownTrigger.nativeElement);
  }
}
