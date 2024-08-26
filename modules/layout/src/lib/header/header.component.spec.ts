import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call toggleMenu and close menu', () => {
    component.isMenuExpanded = true;
    component.toggleMenu();
    expect(component.isMenuExpanded).toBe(false);
  });

  it('should call toggleMenu and open menu', () => {
    component.isMenuExpanded = false;
    component.toggleMenu();
    expect(component.isMenuExpanded).toBe(true);
  });

  it('should toggle menu on Enter key press', () => {
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    component.isMenuExpanded = false;

    component.handleKeyDown(event);

    expect(component.isMenuExpanded).toBe(true);
  });

  it('should toggle menu on Space key press', () => {
    const event = new KeyboardEvent('keydown', { key: ' ' });
    component.isMenuExpanded = false;

    component.handleKeyDown(event);

    expect(component.isMenuExpanded).toBe(true);
  });

  it('should not toggle menu on other key press', () => {
    const event = new KeyboardEvent('keydown', { key: 'a' });
    component.isMenuExpanded = false;

    component.handleKeyDown(event);

    expect(component.isMenuExpanded).toBe(false);
  });
});
