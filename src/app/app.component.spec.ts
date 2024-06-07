import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
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

  it(`should have as title 'Portal ASCEPA'`, () => {
    expect(component.title).toBe('Portal ASCEPA');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const title: HTMLElement = fixture.nativeElement.querySelector('h1');
    expect(title.textContent).toContain(component.title);
  });
});
