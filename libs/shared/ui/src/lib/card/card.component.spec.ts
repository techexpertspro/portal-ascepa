import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { axe, toHaveNoViolations } from 'jest-axe';
import { CardComponent } from './card.component';

expect.extend(toHaveNoViolations);

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatChipsModule,
        MatButtonModule,
        NoopAnimationsModule,
        CardComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.title = 'Test Title';
    component.subtitle = 'Test Subtitle';
    component.description = 'Test Description';
    component.badges = ['Badge1', 'Badge2'];
    component.buttonPrimary = 'Details';
    component.buttonSecondary = 'Apply';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title, subtitle, description, and badges', () => {
    const title = fixture.debugElement.query(
      By.css('.card__title'),
    ).nativeElement;
    const subtitle = fixture.debugElement.query(
      By.css('.card__text--subtitle'),
    ).nativeElement;
    const description = fixture.debugElement.query(
      By.css('.card__text--description'),
    ).nativeElement;
    const badges = fixture.debugElement.queryAll(
      By.css('.card__badge mat-chip'),
    );

    expect(title.textContent).toBe(component.title);
    expect(subtitle.textContent).toBe(component.subtitle);
    expect(description.textContent.trim()).toBe(component.description);
    expect(badges.length).toBe(component.badges.length);
    expect(badges[0].nativeElement.textContent).toBe(component.badges[0]);
    expect(badges[1].nativeElement.textContent).toBe(component.badges[1]);
  });

  it('should display the button labels correctly', () => {
    const strokedButton = fixture.debugElement.query(
      By.css('.card__buttons--stroked'),
    ).nativeElement;
    const flatButton = fixture.debugElement.query(
      By.css('.card__buttons--flat'),
    ).nativeElement;

    expect(strokedButton.textContent.trim()).toBe(component.buttonPrimary);
    expect(flatButton.textContent.trim()).toBe(component.buttonSecondary);
  });

  it('should emit the correct event when a button is clicked', () => {
    const spy = jest.spyOn(component.buttonTrigger, 'emit');

    const strokedButton = fixture.debugElement.query(
      By.css('.card__buttons--stroked'),
    );
    const flatButton = fixture.debugElement.query(
      By.css('.card__buttons--flat'),
    );

    strokedButton.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalledWith('primary');

    flatButton.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalledWith('secondary');
  });

  it('should have no accessibility violations', async () => {
    fixture.detectChanges();
    const results = await axe(fixture.nativeElement);
    expect(results).toHaveNoViolations();
  });
});
