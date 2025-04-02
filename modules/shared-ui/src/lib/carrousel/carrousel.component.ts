import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface LatestNews {
  title: string;
  content: string;
  imageUrl: string;
  altText: string;
  href?: string;
}

@Component({
  selector: 'lib-carrousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent implements OnInit {
  @Input() cards: LatestNews[] = [];
  @Input() showIndicator = true;
  @Input() showNavigators = true;
  @Input() showTitle = '';
  @Input() animationSpeed = 1000;
  @Input() autoPlay = false;
  @Input() autoPlayInterval = 3000;
  @Input() selectedIndex = 0;
  @Output() selectedIndexChange = new EventEmitter<number>();

  hidden = false;

  ngOnInit(): void {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlayInterval);
    }
  }

  next() {
    const selectedIndex = (this.selectedIndex + 1) % this.cards.length;
    this.jumpToSlide(selectedIndex);
  }
  previous() {
    const selectedIndex =
      (this.selectedIndex - 1 + this.cards.length) % this.cards.length;
    this.jumpToSlide(selectedIndex);
  }
  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.selectedIndex = index;
      this.selectedIndexChange.emit(this.selectedIndex);
      this.hidden = false;
    }, this.animationSpeed);
  }

  handleKeyEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      window.location.href = this.cards[this.selectedIndex].href || '';
    }
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.next();
    }
  }
  @HostListener('document:keydown', ['$event'])
  OnKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.previous();
    }
  }
  @HostListener('document:keypress', ['$event'])
  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleKeyEnter(event);
    }
  }
}
