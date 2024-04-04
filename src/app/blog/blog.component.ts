import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Blogs } from '../blogs';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [NgFor],
  template: `
    <div ><h2 id="blogTitle">ISTYLE Blog</h2>
    <p>
      Újdonságok, hírek, terméktesztek, érdekességek
    </p>
    <a id="Sum" href="">Összes cikk  ></a></div>
    <div id="blogBoxContainer"><div class="blogBox" *ngFor= "let blog of blogs">
      <img src="{{blog.image}}" alt="Blog picture" arria-hidden=true>
      <h2>{{blog.title}}</h2>
      <p>{{blog.description}}</p>
      <button class="nextBT">Tovább</button>
    </div> </div>
  `,
  styleUrl: './blog.component.css'
})
export class BlogComponent {
blogs:Blogs[]=[
  {image:"https://istyle.hu/pub/media/wysiwyg/HU/misc/blog-thumb/2024-02-06.jpeg",
title:"Az IOS 17 egyelőre lassabban terjed, mint annak idején az IOS 16",
description:"Az aktuális főverzió nagyon jól sikerült mégis lassabban állnak át rá a felhasználók, mint egy évvel korábban az IOS 16-ra."},
{image:"https://istyle.hu/media/oander/news/article/ios_17_4_cover.jpeg",
title:"Ezek az új emojik az IOS 17.4-ben",
description:"A hamarosan érkező renszerfrissítéssel rengeteg új emoji is érkeznek."},
{
  image:"https://istyle.hu/pub/media/wysiwyg/HU/misc/blog-thumb/2024-01-24.jpeg",
  title:"Ellopott eszköz védelme az IOS 17.3-ban",
  description:"Nagyszerű funkció érkezett a legújabb szoftverfejlesztéssel, érdemes azonnal telepíteni"
}
]
}
