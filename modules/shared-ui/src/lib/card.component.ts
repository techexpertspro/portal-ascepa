import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

export interface CardInput {
  title: string;
  subtitle: string;
  description: string;
  badges: string[];
  buttons: CardButton;
}
interface CardButton {
  strokeLabel: string;
  flatLabel: string;
}
@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatChipsModule, MatButton],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() cardData: CardInput = {} as CardInput;
  @Output() buttonTrigger: EventEmitter<string> = new EventEmitter();

  handleClick(buttonType: string) {
    this.buttonTrigger.emit(buttonType);
  }
}
