import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

/**
 * Componente de Banner da Página Inicial
 * @description Pode ser utilizado para destacar informações importantes ou eventos relevantes para a Ascepa.
 *
 * @example
 * ```html
 * <lib-home-banner></lib-home-banner>
 * ```
 *
 * @author Tech Experts
 */
@Component({
  selector: 'lib-home-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss',
})
export class HomeBannerComponent {
  bannerImgSrc = 'image-landscape.png';
}
