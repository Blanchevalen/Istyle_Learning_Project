import { Component } from '@angular/core';
import { HeaderMenuComponent } from '../header-menu/header-menu.component';
import { HeaderSlideComponent } from '../header-slide/header-slide.component';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderMenuComponent, HeaderSlideComponent],
  template: `
  <div id="container">
    <app-header-menu></app-header-menu>
    <app-header-slide></app-header-slide>
</div>
  `,
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
