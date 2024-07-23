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
    // Gets the currently focused element
    const focusedElement = document.activeElement as HTMLElement;
    // Checks if the focused element is an indicator
    if (focusedElement?.classList.contains('indicator')) {
      const indicators = Array.from(document.querySelectorAll('.indicator'));
      const index = indicators.indexOf(focusedElement);

      if (index >= 0 && this.images?.[index]?.href) {
        // Navigate to the href of the focused indicator
        window.location.href = this.images[index].href;
      }
    } else if (this.images.length > 0 && this.images[this.selectedIndex].href) {
      window.location.href = this.images[this.selectedIndex].href;
      // If no indicator is focused, use the selected image
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
