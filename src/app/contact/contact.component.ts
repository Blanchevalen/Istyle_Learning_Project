import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <div id="cardBox">
      <div id="costumerService">
        <img src="../../assets/images/icon-contact.png">  
        <h3>Ügyfélszolgálat</h3>
        <p>Kérdésed van? Megválaszoljuk!</p>
        <a href="">Tovább ></a>
      </div>

      <div id="serviceCourier">
        <img src="../../assets/images/icon-service.png">  
        <h3>Szervizfutár rendelés</h3>
        <p>Kattints és rendelj szervizfutárt</p>
        <a href="">Időpontfoglalás ></a>
      </div>
    </div>
  `,
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
