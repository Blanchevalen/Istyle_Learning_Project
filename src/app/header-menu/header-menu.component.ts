import { Component, AfterViewInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  templateUrl: './header-menu.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements AfterViewInit {

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngAfterViewInit(): void {
    const menuItems = this.el.nativeElement.querySelectorAll('.listItem');

    
  }
}
