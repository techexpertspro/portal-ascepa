import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { By } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { axe, toHaveNoViolations } from 'jest-axe';
import { CardComponent, CardInput } from './card.component';

expect.extend(toHaveNoViolations);

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  const cardData: CardInput = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    description: 'Test Description',
    badges: ['Badge1', 'Badge2'],
    buttons: { strokeLabel: 'Details', flatLabel: 'Apply' },
  };

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
    component.cardData = cardData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title, subtitle, description, and badges', () => {
    const title = fixture.debugElement.query(
      By.css('.card__title h3'),
    ).nativeElement;
    const subtitle = fixture.debugElement.query(
      By.css('.card__subtitle p'),
    ).nativeElement;
    const description = fixture.debugElement.query(
      By.css('.card__description p'),
    ).nativeElement;
    const badges = fixture.debugElement.queryAll(
      By.css('.card__badge mat-chip'),
    );

    expect(title.textContent).toBe(cardData.title);
    expect(subtitle.textContent).toBe(cardData.subtitle);
    expect(description.textContent.trim()).toBe(cardData.description);
    expect(badges.length).toBe(cardData.badges.length);
    expect(badges[0].nativeElement.textContent).toBe(cardData.badges[0]);
    expect(badges[1].nativeElement.textContent).toBe(cardData.badges[1]);
  });

  it('should display the button labels correctly', () => {
    const strokedButton = fixture.debugElement.query(
      By.css('.card__buttons--stroked'),
    ).nativeElement;
    const flatButton = fixture.debugElement.query(
      By.css('.card__buttons--flat'),
    ).nativeElement;

    expect(strokedButton.textContent.trim()).toBe(cardData.buttons.strokeLabel);
    expect(flatButton.textContent.trim()).toBe(cardData.buttons.flatLabel);
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
    expect(spy).toHaveBeenCalledWith(cardData.buttons.strokeLabel);

    flatButton.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalledWith(cardData.buttons.flatLabel);
  });

  it('should have no accessibility violations', async () => {
    fixture.detectChanges();
    const results = await axe(fixture.nativeElement);
    expect(results).toHaveNoViolations();
  });
});
