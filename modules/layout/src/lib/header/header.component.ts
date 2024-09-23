import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ThemeToggleComponent } from '@portal-ascepa/shared-ui';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  opened = false;

  toggleMenu(): void {
    this.opened = !this.opened;
  }
}
