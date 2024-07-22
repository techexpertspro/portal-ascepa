import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  opened = false;

  toggleMenu(): void {
    this.opened = !this.opened;
  }

  onKeyUpSpace(event: KeyboardEvent): void {
    event.preventDefault();

    if (
      event.code === 'Space' ||
      event.code === 'Enter' ||
      event.key === ' ' ||
      event.key === 'Enter'
    ) {
      this.toggleMenu();
    }
  }
}
