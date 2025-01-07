import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SpeechRecognitionService } from '@ng-web-apis/speech';
import { Subject } from 'rxjs';
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

  it('should scroll to "about-us" section when "Quem somos" is clicked', () => {
    const scrollIntoViewMock = jest.fn();
    const targetSection = document.createElement('section');
    targetSection.id = 'about-us';
    targetSection.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(targetSection);

    const link = fixture.debugElement.query(By.css('a[href="#about-us"]'));
    component.scrollToSection('about-us');

    expect(scrollIntoViewMock).toHaveBeenCalled();

    document.body.removeChild(targetSection);
  });

  it('should scroll to "latest-news" section when "Notícias" is clicked', () => {
    const scrollIntoViewMock = jest.fn();
    const targetSection = document.createElement('section');
    targetSection.id = 'latest-news';
    targetSection.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(targetSection);

    component.scrollToSection('latest-news');

    expect(scrollIntoViewMock).toHaveBeenCalled();

    document.body.removeChild(targetSection);
  });

  it('should scroll to "join-us" section when "Filie-se" is clicked', () => {
    const scrollIntoViewMock = jest.fn();
    const targetSection = document.createElement('section');
    targetSection.id = 'join-us';
    targetSection.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(targetSection);

    component.scrollToSection('join-us');

    expect(scrollIntoViewMock).toHaveBeenCalled();

    document.body.removeChild(targetSection);
  });
});
