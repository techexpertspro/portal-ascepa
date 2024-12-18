import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'lib-header',
  imports: [CommonModule, NgOptimizedImage, SettingsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  opened = false;

  toggleMenu(): void {
    this.opened = !this.opened;
  }
}
