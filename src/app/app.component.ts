import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule ,NgFor} from '@angular/common';
import { NewsComponent } from './news/news.component';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NewsFormComponent } from './news-form/news-form.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgModule } from '@angular/core';
import { Carousel2Component } from './carousel2/carousel2.component';
import { FooterComponent } from './footer/footer.component';
import { Carousel3Component } from './carousel3/carousel3.component';
import { NavigationRowComponent } from './navigation-row/navigation-row.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { Products } from './products';
import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { pipe } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
//import { SwiperConfigInterface } from 'ngx-swiper-wrapper'; //nem ismerem ezt a könyvtárat, ez nincs csatolva
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,NgFor, ContactComponent,HeaderMenuComponent,FooterComponent,BlogComponent,NewsComponent,NavigationRowComponent,Carousel3Component,Carousel2Component,SlickCarouselModule,RouterOutlet, HeaderComponent,NewsFormComponent],
  template: `

    <app-header></app-header>
    
   
<app-news></app-news>
<app-blog></app-blog>
<app-contact></app-contact>
    <app-news-form></app-news-form>
 <main>
  <h2>Iphone kiegészítők</h2>
  <p>Esszenciális kiegészítők a legújabb Iphone-hoz</p>
  <a href="" id="aSlider">További kiegészítők > </a>
    <swiper-container id="swiperContainer"  loop="true" navigation="true"
    [slidesPerView]="4"  [navigation]="true"
      [pagination]="{ clickable: true }"
      >
   <!-- <swiper-slide *ngFor="let product of productsIphone" style="width:400px">
      <div class="productBox"><img class="productImage" src="{{product.images}}">
      <p class="productDescription">{{product.description}}</p>
      <p class="price">{{product.price}}</p>
      <p class="status">{{product.status}}</p>
      <button class="btnDetails">Részletek</button>
      <button class="btnCart"><img src="../assets/images/icon-cart.svg"></button></div>
    </swiper-slide>--><!--Működik, de egy div/oldal jelenik meg, jobban el kellene méllyülnöm a swiper működésében, de hetek óta vergődök azon, hogy legyen egy működő megoldásom, így most elengedem ezt a fapados megoldást választva-->
    <swiper-slide style=' border:1px solid lightgray;'>
    <div class="productBox"><img class="productImage" src="{{productsIphone[0].images}}">
      <p class="productDescription">{{productsIphone[0].description}}</p>
      <p class="productPrice">{{productsIphone[0].price}}</p>
      <p class="status">{{productsIphone[0].status}}</p>
      <div class="btnBox">
      <button class="btnDetails">Részletek</button>
      <button class="btnCart"><img src="../../assets/images/icon_bag.png"></button></div></div>
    </swiper-slide>
    <swiper-slide style=' border:1px solid lightgray;'>
    <div class="productBox"><img class="productImage" src="{{productsIphone[1].images}}">
      <p class="productDescription">{{productsIphone[1].description}}</p>
      <p class="productPrice">{{productsIphone[1].price}}</p>
      <p class="status">{{productsIphone[1].status}}</p>
      <div class="btnBox">
      <button class="btnDetails">Részletek</button>
      <button class="btnCart"><img src="../../assets/images/icon_bag.png"></button></div></div>
    </swiper-slide>
    <swiper-slide style=' border:1px solid lightgray;'>
    <div class="productBox"><img class="productImage" src="{{productsIphone[2].images}}">
      <p class="productDescription">{{productsIphone[2].description}}</p>
      <p class="productPrice">{{productsIphone[2].price}}</p>
      <p class="status">{{productsIphone[2].status}}</p>
      <div class="btnBox">
      <button class="btnDetails">Részletek</button>
      <button class="btnCart"><img src="../../assets/images/icon_bag.png"></button></div></div>
    </swiper-slide>
    <swiper-slide style=' border:1px solid lightgray;'>
    <div class="productBox"><img class="productImage" src="{{productsIphone[3].images}}">
      <p class="productDescription">{{productsIphone[3].description}}</p>
      <p class="productPrice">{{productsIphone[3].price}}</p>
      <p class="status">{{productsIphone[3].status}}</p>
      <div class="btnBox">
      <button class="btnDetails">Részletek</button>
      <button class="btnCart"><img src="../../assets/images/icon_bag.png"></button></div></div>
    </swiper-slide>
    <swiper-slide style=' border:1px solid lightgray;'>
    <div class="productBox"><img class="productImage" src="{{productsIphone[4].images}}">
      <p class="productDescription">{{productsIphone[4].description}}</p>
      <p class="productPrice">{{productsIphone[4].price}}</p>
      <p class="status">{{productsIphone[4].status}}</p>
      <div class="btnBox">
      <button class="btnDetails">Részletek</button>
      <button class="btnCart"><img src="../../assets/images/icon_bag.png"></button></div></div>
    </swiper-slide>
    <swiper-slide style=' border:1px solid lightgray;'>
    <div class="productBox"><img class="productImage" src="{{productsIphone[5].images}}">
      <p class="productDescription">{{productsIphone[5].description}}</p>
      <p class="productPrice">{{productsIphone[5].price}}></p>
      <p class="status">{{productsIphone[5].status}}</p>
      <div class="btnBox">
      <button class="btnDetails">Részletek</button>
      <button class="btnCart"><img src="../../assets/images/icon_bag.png" class="icon"></button></div></div>
    </swiper-slide>
    <swiper-slide style=' border:1px solid lightgray;'>
      <img src="../../assets/images/product2.jpg">
    </swiper-slide>
    <swiper-slide style=' border:1px solid lightgray;'>
      <img src="../../assets/images/product3.jpg">
    </swiper-slide>
    <swiper-slide style=' border:1px solid lightgray;'>
      <img src="../../assets/images/product4.jpg">
    </swiper-slide>
    <swiper-slide style=' border:1px solid lightgray;'>
      <img src="../../assets/images/product5.jpg">
    </swiper-slide>
    <swiper-slide style=' border:1px solid lightgray;'>
      <img src="../../assets/images/product6.jpg">
    </swiper-slide>
   
   </swiper-container>
 
</main> 

    <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppComponent {
  title = 'istyle';
  
  //public swiperConfig: SwiperConfigInterface = {
    // Swiper konfiguráció
   // slidesPerView: 1,
   // spaceBetween: 10,//
//Az adatokat innen is ki kellene helyezni, pontosabban nyílván szerverről kapná az app valós környezetben.
productsIphone:Products[]=[
  {images:"../../assets/images/prodIphone0.jpg",
    description:"20 wattos USB-C hálózati adapter",
  price:"9 900 Ft",//Legközelebb a currency pipot használom formázásra, nem ezt a csúnya fapados megoldást
  status:"Készleten"
},
{images:"../../assets/images/prodIphone1.jpeg",
description:"AirPods Lightning töltő tokkal (2.generáció)",
price:"5 9990 Ft",
status:"Készleten"
},
{images:"../../assets/images/prodIphone2.jpg",
description:"MagSafe töltő Iphonehoz",
price:"1 990 Ft",
status:"Készleten"
},
{images:"../../assets/images/prodIphone3.jpg",
description:"Satechi-Trio vezetéknélküli töltő",
price:"4 7990 Ft",
status:"Készleten"
},
{images:"../../assets/images/prodIphone4.jpg",
description:"Apple- AirTag (1 darabos csomag)",
price:"1 4990 Ft",
status:"Készleten"
},
{images:"../../assets/images/prodIphone5.jpg",
description:"Apple USB-C Lightning kábel (2m)",
price:"1 4990 Ft",
status:"Készleten"
},
]

}
