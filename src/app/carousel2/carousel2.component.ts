import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel2',
  standalone: true,
  imports: [CommonModule, SlickCarouselModule],
  template: `
    <p>
      carousel2 works!
    </p>
    <div style="margin-left:10px; margin-right:10px;margin-top:50px; ">
      <ngx-slick-carousel class="carousel" #slickModal="slick-carousel"
  [config]="slideConfig">
        <div ngxSlickItem *ngFor="let slide of slides" class="slide">
          <img src="{{slide.img}}" alt="" class="img-style">
        </div>

       </ngx-slick-carousel>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script src="path/to/ngx-slick-carousel.js"></script>
<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
<script>
  var myJQuery = jQuery.noConflict();
</script>
<script src="path/to/slick.min.js"></script>
  `,
  styles: [`
  app-carousel2{ 
    max-width:300px;
    margin:0;
  }
  .slide {
    text-align: center;
  }

  .img-style {
    margin-left: auto;
    margin-right: auto;
    height: 200px;
    width: 200px;
  }

  @media (max-width: 992px) {
    .img-style {
      margin-left: 10px !important;
      margin-right: 10px !important;
    }
  }
`]
})
export class Carousel2Component {
slides=[
{img:'../../assets/images/product0.jpg'},
{img:"../../assets/images/product1.jpg"},
{img:"../../assets/images/product2.jpg"},
{img:"../../assets/images/product3.jpg"},
{img:"../../assets/images/product4.jpg"},
{img:"../../assets/images/product5.jpg"},
{img:"../../assets/images/product6.jpg"},
]


slideConfig={
  "slidesToShow":4,
  "slidesToScroll":4,
  "autoplay":true,
  "autoPlaySpeed":5000,
  "pauseOnHover":true,
  "infinite":true,
  "responsive":[
    {"breakpoint":992,
    "settings":{
      "arrows":true,
      "infinite":true,
      "slidesToShow":3,
      "slidesToScroll":3,
      "variableWidth": true // Hozzáadva
    }},
    {
      "breakpoint":768,
    "settings":{
      "arrows":true,
      "infinite":true,
      "slidesToShow":1,
      "slidesToScroll":1,
      "variableWidth": true // Hozzáadva
    }

  }
  ]
};
}
