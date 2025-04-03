import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-carrousel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss'],
})
export class CarrouselComponent implements OnInit, OnDestroy {
  @Input() items: unknown[] = [];
  @Input() showIndicator = true;
  @Input() showNavigators = true;
  @Input() animationSpeed = 1000;
  @Input() autoPlay = false;
  @Input() autoPlayInterval = 3000;
  @ContentChild(TemplateRef) itemTemplate!: TemplateRef<unknown>;
  selectedIndex = 0;

  private autoPlayIntervalId: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    if (this.autoPlay) {
      this.startAutoPlay();
    }
  }

  ngOnDestroy(): void {
    this.stopAutoPlay();
  }

  next() {
    const nextIndex = (this.selectedIndex + 1) % this.items.length;
    this.selectedIndex = nextIndex;
  }

  previous() {
    const prevIndex =
      (this.selectedIndex - 1 + this.items.length) % this.items.length;
    this.selectedIndex = prevIndex;
  }

  jumpToSlide(index: number) {
    this.selectedIndex = index;
  }

  // Inicia o autoplay
  private startAutoPlay() {
    this.autoPlayIntervalId = setInterval(() => {
      this.next();
    }, this.autoPlayInterval);
  }

  // Para o autoplay
  private stopAutoPlay() {
    if (this.autoPlayIntervalId) {
      clearInterval(this.autoPlayIntervalId);
      this.autoPlayIntervalId = null;
    }
  }

  // Atalhos do teclado
  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.next();
    }
    if (event.key === 'ArrowLeft') {
      this.previous();
    }
  }
}
