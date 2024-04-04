import { Component } from '@angular/core';

@Component({
  selector: 'app-header-slide',
  standalone: true,
  imports: [],
  template: `
    <section id="sliderContainer">
      <div id=slideSpring>
        <p id="springIcon">%</p>
        <h2>Köszöntsd a tavaszt mosolygósan.</h2>
        <p id="description">Fedezd fel különleges szezonális ajánlatainkat!</p>
        <button>Érdekel</button>
      </div>
      <div id="slide0THM">
      <div><h2>Minden, ami Apple. Most 0% THM-mel!</h2>
      <p id="THMdescription">Vidd haza bármely Apple termékünket, most 0% THM-mel, 15 hónapos futamidővel.</p>  
      </div><div><img src="https://istyle.hu/media/oander/multislider/general_mobile.png" alt="Apple termékek" title="Apple termékek">
       
        <button>Érdekel</button>
        <p id="THMminiDescription">Válaszd az OTP vagy a Cetelem áruhitel ajánlatát. Áruhitel Referencia THM:0%, minimum 100000, maximum 2000000 hitelösszeg, 15 hónapos futamidő esetén. Az ajánlat 2024.03.31-ig vgy visszavonásig érvényes. Az ajánlat üzleteinkben és a webáruházban is érvényes. A tjékoztatás nem teljeskörű. A kép illusztráció.
      </div></div>
    </section>
    <section id="menu">
      <ul>
        <li><a href="">Tavaszi ajánlatok</a></li>
        <li><a href="">0% THM</a></li>
        <li><a href="">Új MacBook Air</a></li>
        <li><a href="">Készülékbeszámítás</a></li>
        <li><a href="">0% THM</a></li>
      </ul>
    </section>
  `,
  styleUrl: './header-slide.component.css'
})
export class HeaderSlideComponent {

}
