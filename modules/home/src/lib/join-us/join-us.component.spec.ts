import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  BreakpointService,
  homeContentMock,
  SectionContent,
} from '@portal-ascepa/shared-ui';
import { axe, toHaveNoViolations } from 'jest-axe';
import { JoinUsComponent } from './join-us.component';
import { MAGIC_NUMBERS } from './join-us.constants';

expect.extend(toHaveNoViolations);

describe('JoinUsComponent', () => {
  let component: JoinUsComponent;
  let fixture: ComponentFixture<JoinUsComponent>;
  let mockBreakpointService: BreakpointService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinUsComponent],
      providers: [
        {
          provide: BreakpointService,
          useValue: { isHandsetPortrait: () => true },
        },
      ],
    }).compileComponents();
    mockBreakpointService = TestBed.inject(BreakpointService);
    fixture = TestBed.createComponent(JoinUsComponent);
    component = fixture.componentInstance;
    component.content = homeContentMock[3] as Partial<SectionContent>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have no accessibility violations', async () => {
    fixture.detectChanges();
    const results = await axe(fixture.nativeElement);
    expect(results).toHaveNoViolations();
  });

  it('should render the h2 title correctly', () => {
    component.content.title = 'Filie-se';
    const sectionTitle = fixture.debugElement.query(By.css('h2'))
      .nativeElement as HTMLHeadingElement;

    expect(sectionTitle.textContent).toBe(component.content.title);
  });

  it('should render the paragraph text correctly', () => {
    const sectionTitle = fixture.debugElement.query(By.css('p'))
      .nativeElement as HTMLElement;

    expect(sectionTitle.textContent).toContain(
      ' Junte-se a nós e fortaleça a luta pelos direitos das pessoas com deficiência visual no Pará! Ao se filiar à nossa associação, você contribuirá para ampliar o acesso a oportunidades de inclusão, educação e suporte para a comunidade de cegos. Faça parte dessa rede e ajude a construir um futuro mais acessível para todos. ',
    );
  });

  it('should trigger the learnMore method on button click', () => {
    const joinUsSpy = jest.spyOn(component, 'learnMore');
    const sectionTitle = fixture.debugElement.query(By.css('button'))
      .nativeElement as HTMLButtonElement;

    sectionTitle.click();

    fixture.detectChanges();

    expect(joinUsSpy).toHaveBeenCalled();
  });

  it('should render the image with the correct attributes', () => {
    const imgElement: HTMLImageElement =
      fixture.nativeElement.querySelector('img');

    expect(imgElement.src).toContain('joinus.png');
    expect(imgElement.alt).toBe('Foto de equipe da família ASCEPA');
    expect(imgElement.width).toBe(MAGIC_NUMBERS.FOUR_HUNDRED);
    expect(imgElement.height).toBe(MAGIC_NUMBERS.FOUR_HUNDRED);
  });

  it('should apply "handset-portrait" class when isHandsetPortrait is true', () => {
    const sectionElement = fixture.debugElement.query(
      By.css('section'),
    ).nativeElement;
    expect(sectionElement.classList).toContain('handset-portrait');
  });

  it('should apply "default" class when isHandsetPortrait is false', () => {
    fixture.destroy();
    jest
      .spyOn(mockBreakpointService, 'isHandsetPortrait')
      .mockReturnValue(false);

    fixture = TestBed.createComponent(JoinUsComponent);
    component = fixture.componentInstance;
    component.content = homeContentMock[3] as Partial<SectionContent>;
    fixture.detectChanges();

    const sectionElement = fixture.debugElement.query(
      By.css('section'),
    ).nativeElement;
    expect(sectionElement.classList).toContain('default');
  });
});
