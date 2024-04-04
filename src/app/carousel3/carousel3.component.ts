import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel3',
  standalone: true,
  imports: [SlickCarouselModule],
  template: `
    <div class="your-class">
  <div>your content123123</div>
  <div>your content656768</div>
  <div>your content7766767788</div>
</div>
			
  `,
  styleUrl: './carousel3.component.css'
})
export class Carousel3Component {


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




interface Slide {
  img: string;
  caption: string;
}


