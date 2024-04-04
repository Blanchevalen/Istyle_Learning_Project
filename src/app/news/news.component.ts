import { Component } from '@angular/core';
import { News } from '../news';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [NgFor],
  template: `
  <div class="grid-container">
  <div *ngFor="let new of news" class="grid-item" >
    <div class="typeBox"><div class="typeBorder"><div class="type">{{new.type}}</div></div>
    <h2>{{new.title}}</h2>
    <p>{{new.description}}</p>
    <a href="">{{new.link}}</a></div>
    <div><img src="{{new.image}}" alt=""></div>
  </div>
</div>
  `,
  styleUrl: './news.component.css'
})
export class NewsComponent {
//Az adatokat érdemes lenne kihelyezni külső fájlba, szerverre.
  news:News[]=[
  {
    type:'Akció',
    title:"Okosabb.Fényesebb.Kezesebb.",
    description:"Válogass kedvezményes Apple Watch modelljeink közül, most hihetetlenül jó árakon!",
    link:"Vásárlás>",
    image:"https://istyle.hu/pub/media/wysiwyg/HU/misc/home2020/special-offers/202402/aw9.png"
  },
  {
    type:'Akció',
    title:"Láthatatlan. Laza. Lenyűgöző.",
    description:"Válaszd AirPods (2.gen) modellünket most szuper áron!",
    link:"Vásárlás>",
    image:"https://istyle.hu/pub/media/wysiwyg/HU/misc/home2020/special-offers/202402/airpods.png"

  },
  {type:'Akció',
    title:"Minden, ami Apple. Üzletnyitás.",
    description:"Ne maradj le nyitóajánlatainkról, iratkozz fel hírlevelünkre",
    link:"Vásárlás>",
    image:"https://istyle.hu/pub/media/wysiwyg/HU/misc/home2020/special-offers/202402/pro-family.png"}
]
}
