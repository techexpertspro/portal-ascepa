import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface CarouselImage {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

@Component({
  selector: 'lib-carrousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent implements OnInit {
  @Input() images: CarouselImage[] = [];
  @Input() showIndicator = true;
  @Input() showNavigators = true;
  @Input() animationSpeed = 1000;
  @Input() autoPlay = false;
  @Input() autoPlayInterval = 3000;
  selectedIndex = 0;
  hidden = false;

  ngOnInit(): void {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlayInterval);
    }
  }

  next() {
    const selectedIndex = (this.selectedIndex + 1) % this.images.length;
    this.jumpToSlide(selectedIndex);
  }
  previous() {
    const selectedIndex =
      (this.selectedIndex - 1 + this.images.length) % this.images.length;
    this.jumpToSlide(selectedIndex);
  }
  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.selectedIndex = index;
      this.hidden = false;
    }, this.animationSpeed);
  }

  handleKeyEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      window.location.href = this.images[this.selectedIndex].href;
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
