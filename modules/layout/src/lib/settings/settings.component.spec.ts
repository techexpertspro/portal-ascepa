import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpeechRecognitionService } from '@ng-web-apis/speech';
import { Subject } from 'rxjs';
import { SettingsComponent } from './settings.component';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;
  let speechRecognitionSubject: Subject<any>;
  let mockSpeechRecognitionService: Partial<SpeechRecognitionService>;

  beforeEach(async () => {
    speechRecognitionSubject = new Subject();

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

    // Mock the theme toggle component's ElementRef
    const themeToggleElementRef = {
      nativeElement: {
        querySelector: jest.fn().mockReturnValue({
          click: jest.fn(),
        }),
      },
    } as unknown as ElementRef;

    component.themeToggleRef = themeToggleElementRef;

    fixture.detectChanges();
  });

  it('should create the settings component', () => {
    expect(component).toBeTruthy();
  });

  xit('should call toggleTheme when "change theme" command is recognized', () => {
    fixture.destroy();
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    const toggleThemeSpy = jest.spyOn(component as any, 'toggleTheme');

    // Simulate the speech recognition emitting the "change theme" command
    speechRecognitionSubject.next([
      [
        {
          transcript: 'change theme',
        },
      ],
    ]);

    // Trigger change detection to process the signal update
    fixture.detectChanges();

    // Allow any pending microtasks to complete
    return Promise.resolve().then(() => {
      expect(toggleThemeSpy).toHaveBeenCalled();
    });
  });

  it('should simulate a click on the theme toggle button when toggleTheme is called', () => {
    const clickSpy = jest.fn();

    // Mock the querySelector to return an element with a click method
    component.themeToggleRef.nativeElement.querySelector = jest
      .fn()
      .mockReturnValue({
        click: clickSpy,
      });

    // Call the toggleTheme method
    (component as any).toggleTheme();

    expect(clickSpy).toHaveBeenCalled();
  });
});
