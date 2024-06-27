import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { axe } from 'jest-axe';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it(`should have as title 'Portal-Ascepa'`, () => {
    expect(component.title).toBe('Portal-Ascepa'); //
  });

  it('should render title', () => {
    fixture.detectChanges();
    const title: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toContain(component.title);
  });

  it('should not have a11y violations', async () => {
    fixture.detectChanges();
    const results = await axe(fixture.nativeElement);
    expect(results).toHaveNoViolations();
  });
});
