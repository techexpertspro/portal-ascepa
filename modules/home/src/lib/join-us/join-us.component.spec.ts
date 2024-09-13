import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { axe, toHaveNoViolations } from 'jest-axe';
import { JoinUsComponent } from './join-us.component';

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

  it('should text h2', () => {
    const sectionTitle = fixture.debugElement.query(By.css('h2'))
      .nativeElement as HTMLHeadingElement;

    expect(sectionTitle.textContent).toBe(component['joinUs'].title);
  });

  it('should text p', () => {
    const sectionTitle = fixture.debugElement.query(By.css('p'))
      .nativeElement as HTMLElement;

    expect(sectionTitle.textContent).toContain(component['joinUs'].text);
  });

  it('should click button', () => {
    const joinUsSpy = jest.spyOn(component, 'learnMore');
    const sectionTitle = fixture.debugElement.query(By.css('button'))
      .nativeElement as HTMLButtonElement;

    sectionTitle.click();

    fixture.detectChanges();

    expect(joinUsSpy).toHaveBeenCalled();
  });

  it('should render the image with the correct src, alt, width, and height', () => {
    const imgElement: HTMLImageElement =
      fixture.nativeElement.querySelector('img');

    expect(imgElement.src).toContain(component.joinUs.imgSrc);
    expect(imgElement.alt).toBe(component.joinUs.alternativeText);
    expect(imgElement.width).toBe(389);
    expect(imgElement.height).toBe(205);
  });
});
