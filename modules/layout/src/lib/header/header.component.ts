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
  isMenuExpanded = false;

  toggleMenu(): void {
    this.isMenuExpanded = !this.isMenuExpanded;
  }

  handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggleMenu();
    }
  }
}
