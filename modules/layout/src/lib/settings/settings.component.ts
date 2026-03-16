import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  ElementRef,
  inject,
  Injector,
  OnInit,
  runInInjectionContext,
  ViewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
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

@Component({
  selector: 'lib-settings',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, DisableEventsDirective],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent implements OnInit {
  private readonly recognition$ = inject(SpeechRecognitionService);
  private readonly injector = inject(Injector);
  @ViewChild(ThemeToggleComponent, { static: true, read: ElementRef })
  themeToggleRef!: ElementRef;

  private readonly recognizedCommandSignal = toSignal(
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

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        const command = this.recognizedCommandSignal();
        if (command) {
          this.toggleTheme();
        }
      });
    });
  }

  private toggleTheme(): void {
    if (this.themeToggleRef) {
      const buttonElement = this.themeToggleRef.nativeElement.querySelector(
        'button',
      ) as HTMLButtonElement;

      buttonElement && buttonElement.click();
    }
  }
}
