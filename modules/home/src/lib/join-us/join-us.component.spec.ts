import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { axe, toHaveNoViolations } from 'jest-axe';
import { JoinUsComponent } from './join-us.component';
import { MAGIC_NUMBERS } from './join-us.constants';

expect.extend(toHaveNoViolations);

describe('JoinUsComponent', () => {
  let component: JoinUsComponent;
  let fixture: ComponentFixture<JoinUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinUsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JoinUsComponent);
    component = fixture.componentInstance;
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
    const sectionTitle = fixture.debugElement.query(By.css('h2'))
      .nativeElement as HTMLHeadingElement;

    expect(sectionTitle.textContent).toBe(component['joinUs'].title);
  });

  it('should render the paragraph text correctly', () => {
    const sectionTitle = fixture.debugElement.query(By.css('p'))
      .nativeElement as HTMLElement;

    expect(sectionTitle.textContent).toContain(component['joinUs'].text);
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

    expect(imgElement.src).toContain(component['joinUs'].imgSrc);
    expect(imgElement.alt).toBe(component['joinUs'].alternativeText);
    expect(imgElement.width).toBe(MAGIC_NUMBERS.FOUR_HUNDRED);
    expect(imgElement.height).toBe(MAGIC_NUMBERS.FOUR_HUNDRED);
  });
});
