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
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.next();
    } else if (event.key === 'Enter') {
      this.handleEnterKey();
    }
  }

  handleKeyUp(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.previous();
    } else if (event.key === 'Enter') {
      this.handleEnterKey();
    }
  }

  handleKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      this.handleEnterKey();
    }
  }

  handleEnterKey(): void {
    const focusedElement = document.activeElement as HTMLElement;
    if (focusedElement?.classList.contains('indicator')) {
      const indicators = Array.from(document.querySelectorAll('.indicator'));
      const index = indicators.indexOf(focusedElement);

      if (index >= 0 && this.images?.[index]?.href) {
        window.location.href = this.images[index].href;
      }
    } else if (this.images.length > 0 && this.images[this.selectedIndex].href) {
      window.location.href = this.images[this.selectedIndex].href;
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    this.handleKeyDown(event);
  }

  @HostListener('document:keyup', ['$event'])
  onKeyup(event: KeyboardEvent): void {
    this.handleKeyUp(event);
  }

  @HostListener('document:keypress', ['$event'])
  onKeypress(event: KeyboardEvent): void {
    this.handleKeyPress(event);
  }
}
