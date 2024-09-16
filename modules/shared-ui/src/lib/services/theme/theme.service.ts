import {
  Injectable,
  Renderer2,
  RendererFactory2,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';

export enum Theme {
  Dark = 'dark-theme',
}

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private THEME_KEY = 'theme' as const;
  private readonly renderer: Renderer2;
  readonly isDarkMode: WritableSignal<boolean>;

  constructor(private readonly rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);

    const savedTheme = localStorage.getItem(this.THEME_KEY) === Theme.Dark;
    this.isDarkMode = signal<boolean>(savedTheme);

    this.toggleDarkTheme(savedTheme);

    effect(() => {
      const darkMode = this.isDarkMode();
      this.toggleDarkTheme(darkMode);
      this.cacheTheme(darkMode);
    });
  }

  /**
   * Toggles the dark theme.
   */
  public toggleTheme(): void {
    this.isDarkMode.set(!this.isDarkMode());
  }

  /**
   * Applies or removes the 'dark-theme' class on the body element.
   * @param enable Whether to enable dark mode.
   */
  private toggleDarkTheme(enable: boolean): void {
    const body = this.renderer.selectRootElement('body', true);
    enable
      ? this.renderer.addClass(body, Theme.Dark)
      : this.renderer.removeClass(body, Theme.Dark);
  }

  /**
   * Caches the user's theme preference in localStorage.
   * @param enable Whether dark mode is enabled.
   */
  private cacheTheme(enable: boolean): void {
    enable
      ? localStorage.setItem(this.THEME_KEY, Theme.Dark)
      : localStorage.removeItem(this.THEME_KEY);
  }
}
