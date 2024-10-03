import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  Injector,
  runInInjectionContext,
  ViewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  continuous,
  final,
  isSaid,
  skipUntilSaid,
  SpeechRecognitionService,
  takeUntilSaid,
} from '@ng-web-apis/speech';
import { ThemeToggleComponent } from '@portal-ascepa/shared-ui';
import { filter, repeat, retry } from 'rxjs';
import { DisableEventsDirective } from './disable-pointer.directive';

registerLocaleData(localePt);

@Component({
  selector: 'lib-settings',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ThemeToggleComponent,
    DisableEventsDirective,
    MatSlideToggleModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  private readonly recognition$ = inject(SpeechRecognitionService);
  private readonly injector = inject(Injector);
  @ViewChild(ThemeToggleComponent, { static: true, read: ElementRef })
  themeToggleRef!: ElementRef;

  private readonly themeToggleEffect = runInInjectionContext(
    this.injector,
    () => {
      effect(() => {
        const command = this.recognizedCommandSignal();
        if (command) {
          this.toggleTheme();
        }
      });
    },
  );

  private recognizedCommandSignal = toSignal(
    this.recognition$.pipe(
      retry(),
      repeat(),
      skipUntilSaid('fala Vitão'),
      takeUntilSaid('valeu Vitão'),
      repeat(),
      final(),
      filter((result) => result && result.length > 0),
      filter(isSaid('mudar tema')),
      continuous(),
    ),
    { initialValue: null },
  );

  private toggleTheme(): void {
    if (this.themeToggleRef) {
      const buttonElement = this.themeToggleRef.nativeElement.querySelector(
        'button',
      ) as HTMLButtonElement;

      buttonElement && buttonElement.click();
    }
  }
}
