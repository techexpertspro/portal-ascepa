import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatSlideToggle,
  MatSlideToggleChange,
} from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';
import {
  MOON_SVG,
  SUN_SVG,
  Theme,
  ThemeToggleDirective,
} from './theme-toggle.directive';

@Component({
  template: `<mat-slide-toggle libThemeToggle>Modo escuro</mat-slide-toggle>`,
  standalone: true,
  imports: [MatSlideToggle, ThemeToggleDirective],
})
class TestComponent {}

describe('ThemeToggleDirective', () => {
  let directive: ThemeToggleDirective;
  let ButtonToggle: MatSlideToggle;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent, ThemeToggleDirective, MatSlideToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    const buttonToggleDebugElement = fixture.debugElement.query(
      By.directive(MatSlideToggle),
    );
    ButtonToggle = buttonToggleDebugElement.componentInstance;
    directive = buttonToggleDebugElement.injector.get(ThemeToggleDirective);
  });

  afterEach(() => {
    localStorage.removeItem('theme');
    document.body.classList.remove(Theme.Dark);
  });

  it('should create the directive and MatSlideToggle', () => {
    expect(directive).toBeTruthy();
    expect(ButtonToggle).toBeTruthy();
  });

  it('should apply dark theme when toggle is checked', () => {
    ButtonToggle.checked = true;
    ButtonToggle.change.emit({} as MatSlideToggleChange);
    fixture.detectChanges();

    expect(document.body.classList.contains(Theme.Dark)).toBeTruthy();
    expect(localStorage.getItem('theme')).toBe(Theme.Dark);
  });

  it('should remove dark theme when toggle is unchecked', () => {
    ButtonToggle.checked = true;
    ButtonToggle.change.emit({} as MatSlideToggleChange);
    fixture.detectChanges();

    ButtonToggle.checked = false;
    ButtonToggle.change.emit({} as MatSlideToggleChange);
    fixture.detectChanges();

    expect(document.body.classList.contains(Theme.Dark)).toBeFalsy();
    expect(localStorage.getItem('theme')).toBeNull();
  });

  it('should initialize with dark theme if stored in localStorage', () => {
    localStorage.setItem('theme', Theme.Dark);

    fixture.destroy();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    const buttonToggleDebugElement = fixture.debugElement.query(
      By.directive(MatSlideToggle),
    );
    ButtonToggle = buttonToggleDebugElement.componentInstance;
    directive = buttonToggleDebugElement.injector.get(ThemeToggleDirective);

    expect(document.body.classList.contains(Theme.Dark)).toBeTruthy();
    expect(ButtonToggle.checked).toBeTruthy();
  });

  it('should update icons on toggle state change', () => {
    const mockOnSVG = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );
    mockOnSVG.classList.add('mdc-switch__icon--on');
    const mockOnPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path',
    );
    mockOnSVG.appendChild(mockOnPath);

    const mockOffSVG = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg',
    );
    mockOffSVG.classList.add('mdc-switch__icon--off');
    const mockOffPath = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path',
    );
    mockOffSVG.appendChild(mockOffPath);

    const mockNativeElement = document.createElement('div');
    mockNativeElement.appendChild(mockOnSVG);
    mockNativeElement.appendChild(mockOffSVG);

    directive['toggleSwitch']._switchElement = {
      nativeElement: mockNativeElement,
    };

    const mockSetAttribute = jest.spyOn(directive['renderer'], 'setAttribute');

    directive['updateIcons']();

    fixture.detectChanges();

    expect(mockSetAttribute).toHaveBeenCalledWith(mockOnPath, 'd', MOON_SVG);
    expect(mockSetAttribute).toHaveBeenCalledWith(mockOffPath, 'd', SUN_SVG);
  });
});
