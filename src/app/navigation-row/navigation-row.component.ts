import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation-row',
  standalone: true,
  imports: [],
  template: `
    <div class=navItem>
      <a href=""><img src="https://istyle.hu/pub/media/wysiwyg/HU/trade-in.png">
     <p>Byeback készülékbeeszámítás</p></a>
    </div>
    <div class=navItem>
      <a href=""><img src="https://istyle.hu/pub/media/wysiwyg/HU/smb_icon.png">
     <p>Business+ céges kedvezményprogram</p></a>
    </div>
    <div class=navItem>
      <a href=""><img src="https://istyle.hu/pub/media/wysiwyg/HU/easyupgrade.png">
     <p>Ease upgrade készülékcsere</p></a>
    </div>
    <div class=navItem>
      <a href=""><img src="https://istyle.hu/pub/media/wysiwyg/HU/onlyatistyle.png">
     <p>Family + hűségprogram</p></a>
    </div>
     
  `,
  styleUrl: './navigation-row.component.css'
})
export class NavigationRowComponent {

}
