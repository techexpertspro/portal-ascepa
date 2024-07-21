import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

export interface caroulseImage {
  title: string;
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'lib-carrousel',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatTooltipModule, MatButtonModule],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent implements OnInit {
  @Input() images: caroulseImage[] = [];
  @Input() showIndicator = true;
  @Input() showNavigators = true;
  @Input() animationSpeed = 500;
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
}
