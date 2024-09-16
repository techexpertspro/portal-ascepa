import {
  AfterViewInit,
  DestroyRef,
  Directive,
  inject,
  OnInit,
  Renderer2,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSlideToggle } from '@angular/material/slide-toggle';

export enum Theme {
  Dark = 'dark-theme',
}

export const MOON_SVG =
  'M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.2 0 .425.013 .225.013 .575.038-.9.8-1.4 1.975-.5 1.175-.5 2.475 0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.3 0 2.475-.463T20.95 11.15q.025.3 .038.488Q21 11.825 21 12q0 3.75-2.625 6.375T12 21Zm0-1.5q2.725 0 4.75-1.687t2.525-3.963q-.625.275-1.337.412Q17.225 14.4 16.5 14.4q-2.875 0-4.887-2.013T9.6 7.5q0-.6.125-1.287.125-.687.45-1.562-2.45.675-4.062 2.738Q4.5 9.45 4.5 12q0 3.125 2.188 5.313T12 19.5Zm-.1-7.425Z' as const;

export const SUN_SVG =
  'M12 15.5q1.45 0 2.475-1.025Q15.5 13.45 15.5 12q0-1.45-1.025-2.475Q13.45 8.5 12 8.5q-1.45 0-2.475 1.025Q8.5 10.55 8.5 12q0 1.45 1.025 2.475Q10.55 15.5 12 15.5Zm0 1.5q-2.075 0-3.537-1.463T7 12q0-2.075 1.463-3.537T12 7q2.075 0 3.537 1.463T17 12q0 2.075-1.463 3.537T12 17ZM1.75 12.75q-.325 0-.538-.213Q1 12.325 1 12q0-.325.212-.537Q1.425 11.25 1.75 11.25h2.5q.325 0 .537.213Q5 11.675 5 12q0 .325-.213.537-.213.213-.537.213Zm18 0q-.325 0-.538-.213Q19 12.325 19 12q0-.325.212-.537.212-.213.538-.213h2.5q.325 0 .538.213Q23 11.675 23 12q0 .325-.212.537-.212.213-.538.213ZM12 5q-.325 0-.537-.213Q11.25 4.575 11.25 4.25v-2.5q0-.325.213-.538Q11.675 1 12 1q.325 0 .537.212 .213.212 .213.538v2.5q0 .325-.213.537Q12.325 5 12 5Zm0 18q-.325 0-.537-.212-.213-.212-.213-.538v-2.5q0-.325.213-.538Q11.675 19 12 19q.325 0 .537.212 .213.212 .213.538v2.5q0 .325-.213.538Q12.325 23 12 23ZM6 7.05l-1.425-1.4q-.225-.225-.213-.537.013-.312.213-.537.225-.225.537-.225t.537.225L7.05 6q.2.225 .2.525 0 .3-.2.5-.2.225-.513.225-.312 0-.537-.2Zm12.35 12.375L16.95 18q-.2-.225-.2-.538t.225-.512q.2-.225.5-.225t.525.225l1.425 1.4q.225.225 .212.538-.012.313-.212.538-.225.225-.538.225t-.538-.225ZM16.95 7.05q-.225-.225-.225-.525 0-.3.225-.525l1.4-1.425q.225-.225.538-.213.313 .013.538 .213.225 .225.225 .537t-.225.537L18 7.05q-.2.2-.512.2-.312 0-.538-.2ZM4.575 19.425q-.225-.225-.225-.538t.225-.538L6 16.95q.225-.225.525-.225.3 0 .525.225 .225.225 .225.525 0 .3-.225.525l-1.4 1.425q-.225.225-.537.212-.312-.012-.537-.212ZM12 12Z' as const;

@Directive({
  selector: '[libThemeToggle]',
  standalone: true,
})
export class ThemeToggleDirective implements OnInit, AfterViewInit {
  private THEME_KEY = 'theme' as const;
  private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);
  private readonly toggleSwitch = inject(MatSlideToggle);

  private readonly isDarkMode = signal<boolean>(
    localStorage.getItem(this.THEME_KEY) === Theme.Dark,
  );

  public ngOnInit(): void {
    this.applyTheme(this.isDarkMode());
    this.toggleSwitch.checked = this.isDarkMode();

    this.toggleSwitchObserver();
  }

  public ngAfterViewInit(): void {
    this.updateIcons();
  }

  /**
   * Observa as mudanças no estado do MatSlideToggle.
   * Utiliza o EventEmitter `change` do MatSlideToggle para capturar o evento de mudança
   * e atualizar o tema da aplicação e o estado armazenado.
   * O `takeUntilDestroyed` garante que a assinatura seja limpa quando a diretiva for destruída.
   */
  private toggleSwitchObserver(): void {
    this.toggleSwitch.change
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        const isDarkModeEnabled = this.toggleSwitch.checked;
        this.isDarkMode.set(isDarkModeEnabled);
        this.applyTheme(isDarkModeEnabled);
        this.cacheTheme(isDarkModeEnabled);
      });
  }

  /**
   * Aplica ou remove a classe `dark-theme` no elemento <body> da página.
   * Utiliza o Renderer2 para adicionar ou remover a classe de forma segura.
   *
   * @param isDarkTheme - Um booleano que determina se o tema escuro deve ser ativado.
   */
  private applyTheme(isDarkTheme: boolean): void {
    const body = this.renderer.selectRootElement('body', true);
    isDarkTheme
      ? this.renderer.addClass(body, Theme.Dark)
      : this.renderer.removeClass(body, Theme.Dark);
  }

  /**
   * Armazena ou remove a preferência do tema no localStorage.
   * Se o tema escuro estiver ativado, ele é salvo; caso contrário, é removido.
   *
   * @param isDarkTheme - Um booleano que determina se o tema escuro deve ser armazenado.
   */
  private cacheTheme(isDarkTheme: boolean): void {
    isDarkTheme
      ? localStorage.setItem(this.THEME_KEY, Theme.Dark)
      : localStorage.removeItem(this.THEME_KEY);
  }

  /**
   * Atualiza os ícones do MatSlideToggle para representar o estado atual do tema.
   * O ícone de Lua (modo escuro) e o ícone de Sol (modo claro) são atribuídos dinamicamente
   * ao MatSlideToggle, alterando o "caminho" do SVG baseado no estado do toggle.
   */
  private updateIcons(): void {
    const onSVG: SVGPathElement | null =
      this.toggleSwitch._switchElement.nativeElement.querySelector(
        '.mdc-switch__icon--on path',
      );
    const offSVG: SVGPathElement | null =
      this.toggleSwitch._switchElement.nativeElement.querySelector(
        '.mdc-switch__icon--off path',
      );

    onSVG && this.renderer.setAttribute(onSVG, 'd', MOON_SVG);
    offSVG && this.renderer.setAttribute(offSVG, 'd', SUN_SVG);
  }
}
