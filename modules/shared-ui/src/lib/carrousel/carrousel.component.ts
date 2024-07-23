import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

export interface caroulseImage {
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
  @Input() images: caroulseImage[] = [];
  @Input() showIndicator = true;
  @Input() showNavigators = true;
  @Input() animationSpeed = 1000;
  @Input() autoPlay = false;
  @Input() autoPlayInterval = 3000;
  selectedIndex = 0;
  hidden = false;

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
  ngOnInit() {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlayInterval);
    }
  }
  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'Enter') {
      this.handleEnterKey();
    }
  }

  handleKeyUp(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.previous();
    } else if (event.key === 'Enter') {
      this.handleEnterKey();
    }
  }

  handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.handleEnterKey();
    }
  }
  handleEnterKey() {
    if (this.images && this.images.length > 0) {
      window.location.href = this.images[this.selectedIndex].href;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    this.handleKeyDown(event);
  }

  @HostListener('document:keyup', ['$event'])
  onKeyup(event: KeyboardEvent) {
    this.handleKeyUp(event);
  }

  @HostListener('document:keypress', ['$event'])
  onKeypress(event: KeyboardEvent) {
    this.handleKeyPress(event);
  }
}
