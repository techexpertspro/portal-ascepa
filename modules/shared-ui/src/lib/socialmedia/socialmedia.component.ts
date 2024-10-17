import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { BreakpointService } from '../service/breakpoint/breakpoint.service';
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
  private readonly breakpointObserver = inject(BreakpointService);
  protected readonly instagramUrl = 'https://www.instagram.com/ascepaoficial/';
  imagemteste = this.socialMediaService.getInstagramPost()[0];

  tiles: Tile[] = [
    {
      text: 'One',
      cols: 2,
      rows: 2,
      color: 'lightblue',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
    {
      text: 'Two',
      cols: 2,
      rows: 2,
      color: 'lightgreen',
      imageUrl: this.socialMediaService.getInstagramPost()[1],
    },
    {
      text: 'Three',
      cols: 4,
      rows: 4,
      color: 'lightpink',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
    {
      text: 'Four',
      cols: 2,
      rows: 2,
      color: '#DDBDF1',
      imageUrl: this.socialMediaService.getInstagramPost()[2],
    },
    {
      text: 'Five',
      cols: 2,
      rows: 2,
      color: '#DDBDF1',
      imageUrl: this.socialMediaService.getInstagramPost()[0],
    },
  ];
}
