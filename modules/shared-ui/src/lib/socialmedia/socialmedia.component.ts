import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { SocialMediaService } from '../service/socialmedia/social-media.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  imageUrl: string;
}

@Component({
  selector: 'lib-socialmedia',
  standalone: true,
  imports: [CommonModule, MatGridListModule],
  templateUrl: './socialmedia.component.html',
  styleUrl: './socialmedia.component.scss',
})
export class SocialmediaComponent {
  private readonly socialMediaService = inject(SocialMediaService);
  imagemteste = this.socialMediaService.getInstagramPost()[0];

  tiles: Tile[] = [
    {
      text: 'One',
      cols: 1,
      rows: 2,
      color: 'lightblue',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
    {
      text: 'Two',
      cols: 1,
      rows: 2,
      color: 'lightgreen',
      imageUrl: this.socialMediaService.getInstagramPost()[1],
    },
    {
      text: 'Three',
      cols: 1,
      rows: 2,
      color: 'lightpink',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
    {
      text: 'Four',
      cols: 2,
      rows: 4,
      color: '#DDBDF1',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
    {
      text: 'Five',
      cols: 1,
      rows: 2,
      color: '#DDBDF1',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
    {
      text: 'Six',
      cols: 1,
      rows: 2,
      color: 'red',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
    {
      text: 'Seven',
      cols: 1,
      rows: 2,
      color: 'black',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
    {
      text: 'Seven',
      cols: 1,
      rows: 2,
      color: 'yellon',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
    {
      text: 'Seven',
      cols: 1,
      rows: 2,
      color: 'orange',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
  ];
}
