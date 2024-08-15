import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QuemSomosComponent } from '../quem-somos/quem-somos.component';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, QuemSomosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
