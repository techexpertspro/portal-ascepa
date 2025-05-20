import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, SettingsComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {
  opened = false;

  toggleMenu(): void {
    this.opened = !this.opened;
  }
}
