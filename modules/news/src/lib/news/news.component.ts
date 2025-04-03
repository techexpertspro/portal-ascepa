import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnchorComponent } from '@portal-ascepa/shared-ui';

@Component({
  selector: 'lib-news',
  standalone: true,
  imports: [CommonModule, AnchorComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {}
