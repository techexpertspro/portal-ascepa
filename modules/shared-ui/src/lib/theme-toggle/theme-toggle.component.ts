import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeToggleDirective } from './theme-toggle.directive';

@Component({
  selector: 'lib-theme-toggle',
  imports: [CommonModule, MatSlideToggleModule, ThemeToggleDirective],
  templateUrl: './theme-toggle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleComponent {}
