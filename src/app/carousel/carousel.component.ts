import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

interface Slide {
  img: string;
  caption: string;
}

@Component({
  selector: 'app-carousel',

  styleUrls: ['./carousel.component.css'],
  template: `
    <p>
      carousel works!
    </p>
    
  `
})
export class CarouselComponent {
  // Carousel konfiguráció
  carouselConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
    // További beállítások: https://github.com/kenwheeler/slick/#settings
  };

  slides: Slide[] = [
    { img: 'https://placekitten.com/300/200', caption: 'Cica 1' },
    { img: 'https://placekitten.com/300/201', caption: 'Cica 2' },
    { img: 'https://placekitten.com/300/202', caption: 'Cica 3' },
    { img: 'https://placekitten.com/300/203', caption: 'Cica 4' }
  ];
}
