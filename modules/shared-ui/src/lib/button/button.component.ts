import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButton, MatFabButton } from '@angular/material/button';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule, MatFabButton, MatButton],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label = '';
  @Input() disabled = false;
  @Input() type: 'primary' | 'secondary' = 'primary';

  @Output() eventClick: EventEmitter<void> = new EventEmitter();

  onDispatchEventClick() {
    if (this.disabled) return;
    this.eventClick.emit();
  }
}
