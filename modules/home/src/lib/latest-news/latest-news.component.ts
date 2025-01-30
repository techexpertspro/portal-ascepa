import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  signal,
} from '@angular/core';
import { LatestNews } from '@portal-ascepa/shared-ui';

@Component({
  selector: 'lib-latest-news',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent implements OnInit {
  @Input() latestNews: LatestNews[] = [];
  @Input() title = '';
  @Input() content = '';
  @Input() imageUrl = '';
  @Input() altText = '';

  private readonly _isCarousel = signal(false);
  isReady = signal(false);

  @Input()
  set isCarousel(value: boolean) {
    this._isCarousel.set(value);
    this.isCarouselChange.emit(value);
  }

  get isCarousel(): boolean {
    return this._isCarousel();
  }

  @Output() isCarouselChange = new EventEmitter<boolean>();

  ngOnInit() {
    setTimeout(() => this.isReady.set(true), 0);
  }
}
