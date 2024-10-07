import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeechRecognitionService } from '@ng-web-apis/speech';
import { axe, toHaveNoViolations } from 'jest-axe';
import { Observable, Subject } from 'rxjs';
import { SettingsComponent } from './settings.component';

expect.extend(toHaveNoViolations);

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let speechRecognitionSubject: Subject<SpeechRecognitionResult[]>;
  let mockSpeechRecognitionService: Observable<SpeechRecognitionResult[]>;

  beforeEach(async () => {
    speechRecognitionSubject = new Subject<SpeechRecognitionResult[]>();
    mockSpeechRecognitionService = speechRecognitionSubject.asObservable();

    await TestBed.configureTestingModule({
      imports: [SettingsComponent],
      providers: [
        {
          provide: SpeechRecognitionService,
          useValue: mockSpeechRecognitionService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the settings component', () => {
    expect(component).toBeTruthy();
  });

  it('should have no accessibility violations', async () => {
    fixture.detectChanges();
    const results = await axe(fixture.nativeElement);
    expect(results).toHaveNoViolations();
  });

  it('should call toggleTheme when "change theme" command is recognized', () => {
    const toggleThemeSpy = jest.spyOn(component as any, 'toggleTheme');

    speechRecognitionSubject.next([
      {
        isFinal: true,
        length: 1,
        item: () => ({
          transcript: 'fala vitão',
          confidence: 0.9,
        }),
        0: { transcript: 'fala vitão', confidence: 0.9 },
      },
    ]);

    speechRecognitionSubject.next([
      {
        isFinal: true,
        length: 1,
        item: () => ({
          transcript: 'mudar tema',
          confidence: 0.9,
        }),
        0: { transcript: 'mudar tema', confidence: 0.9 },
      },
    ]);

    speechRecognitionSubject.next([
      {
        isFinal: true,
        length: 1,
        item: () => ({
          transcript: 'valeu Vitão',
          confidence: 0.9,
        }),
        0: { transcript: 'valeu Vitão', confidence: 0.9 },
      },
    ]);

    fixture.detectChanges();

    expect(toggleThemeSpy).toHaveBeenCalledTimes(1);
  });

  it('should simulate a click on the theme toggle button when toggleTheme is called', () => {
    const clickSpy = jest.fn();

    component.themeToggleRef.nativeElement.querySelector = jest
      .fn()
      .mockReturnValue({
        click: clickSpy,
      });

    component['toggleTheme']();

    expect(clickSpy).toHaveBeenCalled();
  });
});
