import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { SpeechRecognitionService } from '@ng-web-apis/speech';
import { axe } from 'jest-axe';
import { Subject } from 'rxjs';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let recognitionSubject: Subject<SpeechRecognitionResult[]>;

  const mockSpeechRecognitionService = {
    pipe: jest.fn(),
  };

  beforeEach(async () => {
    recognitionSubject = new Subject<SpeechRecognitionResult[]>();
    mockSpeechRecognitionService.pipe.mockReturnValue(
      recognitionSubject.asObservable(),
    );
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule],
      providers: [
        provideRouter([]),
        {
          provide: SpeechRecognitionService,
          useValue: mockSpeechRecognitionService,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it(`should have as title 'Portal-Ascepa'`, () => {
    expect(component.title).toBe('Portal-Ascepa'); //
  });

  it('should not have a11y violations', async () => {
    fixture.detectChanges();
    const results = await axe(fixture.nativeElement);
    expect(results).toHaveNoViolations();
  });
});
