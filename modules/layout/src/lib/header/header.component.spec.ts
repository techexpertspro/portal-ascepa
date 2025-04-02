import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { SpeechRecognitionService } from '@ng-web-apis/speech';
import { of, Subject } from 'rxjs';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
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
      imports: [HeaderComponent],
      providers: [
        {
          provide: SpeechRecognitionService,
          useValue: mockSpeechRecognitionService,
        },
        {
          provide: ActivatedRoute,
          useValue: { snapshot: { paramMap: of({}) } },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggleMenu and close menu', () => {
    component.opened = true;
    component.toggleMenu();
    expect(component.opened).toBe(false);
  });

  it('should call toggleMenu and open menu', () => {
    component.opened = false;
    component.toggleMenu();
    expect(component.opened).toBe(true);
  });
});
