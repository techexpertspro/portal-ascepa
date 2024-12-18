import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'lib-card',
  imports: [CommonModule, MatCardModule, MatChipsModule, MatButton],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title = 'title';
  @Input() subtitle = 'subtitle';
  @Input() description = 'description';
  @Input() badges = ['badge1', 'badge2'];
  @Input() buttonPrimary = 'buttonPrimary';
  @Input() buttonSecondary = 'buttonSecondary';
  @Output() buttonTrigger: EventEmitter<string> = new EventEmitter();

  handleClick(buttonType: 'primary' | 'secondary') {
    this.buttonTrigger.emit(buttonType);
  }
}
