import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
    <p id="slider">
      Akár 30 napos visszaküldés
    </p>
    <ul>
      <li class=Bold_text>Termékeink<span><img src="../../assets/images/icon-arrow-down.svg"></span>
        <ul>
          <li>Mac</li>
          <li>IPad</li>
          <li>Iphone</li>
          <li>Apple Watch</li>
        </ul>
      </li>
        
      <li class=Bold_text>Kiegészítők<span><img src="../../assets/images/icon-arrow-down.svg"></span><ul>
          <li>Mac kiegészítők</li>
          <li>IPad kiegészítők</li>
          <li>Iphone kiegészítők</li>
          <li>Zene</li>
        </ul>
      </li>
      <li class=Bold_text>Kapcsolat<span><img src="../../assets/images/icon-arrow-down.svg"></span><ul>
          <li>Karrier</li>
          <li>Üzletek</li>
          <li>Szervíz</li>
          <li>Írj nekünk</li>
        </ul>
      </li>
      <li class=Bold_text>Szolgáltatások<span><img src="../../assets/images/icon-arrow-down.svg"></span><ul>
          <li>Készülékbiztosítás</li>
          <li>Részletfizetés</li>
          <li>Oktatási kedvezmények</li>
          <li>Céges kedvezmények</li>
        </ul>
      </li>
      <li class=Bold_text>Információk<span><img src="../../assets/images/icon-arrow-down.svg"></span><ul>
          <li>Általános Szerződési Feltételek</li>
          <li>Vásárlási tájékoztató</li>
          <li>Szállítási tájékoztató</li>
          <li>Adatkezelési tájékoztató</li>
        </ul>
      </li>
    </ul>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
