import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SettingsComponent } from '../settings/settings.component';
import { AriaCurrentDirective } from './directives/aria-current.directive';

@Component({
  selector: 'lib-header',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    SettingsComponent,
    AriaCurrentDirective,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  opened = false;

  toggleMenu(): void {
    this.opened = !this.opened;
  }
}
