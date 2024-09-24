import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label = '';
  @Input() type: 'submmit' | 'reset' | 'button' = 'button';
  @Input() disabled = false;
  @Input() accent: 'primary' | 'secondary' = 'primary'; //button style background
  @Input({ required: true }) ariaLabel = '';
  @Input() icon = ''; //material icon?

  @Output() submmit = new EventEmitter<Event>();
}
