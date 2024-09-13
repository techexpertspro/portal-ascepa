import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DefaultTextPipe } from './pipes/defaultText/defaultTextPipe.pipe';

@Component({
  selector: 'lib-join-us',
  standalone: true,
  imports: [CommonModule, DefaultTextPipe],
  templateUrl: './join-us.component.html',
  styleUrl: './join-us.component.scss',
})
export class JoinUsComponent implements OnChanges {
  @Input() text!: string;
  @Input() imgSrc!: string;
  @Input() alternativeText!: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text']) {
      const currentValue = changes['text'].currentValue;
    }
  }
}
