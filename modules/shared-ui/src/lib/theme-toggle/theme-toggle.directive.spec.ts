import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatSlideToggle,
  MatSlideToggleChange,
} from '@angular/material/slide-toggle';
import { By } from '@angular/platform-browser';
import { Theme, ThemeToggleDirective } from './theme-toggle.directive';

@Component({
  template: `<mat-slide-toggle libThemeToggle>Dark Mode</mat-slide-toggle>`,
})
class TestComponent {}

describe('ThemeToggleDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let toggle: MatSlideToggle;
  let directiveInstance: ThemeToggleDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [ThemeToggleDirective, MatSlideToggle],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // Obter a instância da diretiva e o MatSlideToggle
    const toggleDebugElement = fixture.debugElement.query(
      By.directive(MatSlideToggle),
    );
    toggle = toggleDebugElement.componentInstance;
    directiveInstance = toggleDebugElement.injector.get(ThemeToggleDirective);
  });

  afterEach(() => {
    // Limpar o localStorage e o tema após cada teste
    localStorage.removeItem('theme');
    document.body.classList.remove(Theme.Dark);
  });

  it('should create the directive and MatSlideToggle', () => {
    expect(directiveInstance).toBeTruthy();
    expect(toggle).toBeTruthy();
  });

  it('should apply dark theme when toggle is checked', () => {
    toggle.checked = true;
    toggle.change.emit({} as MatSlideToggleChange); // Simula a mudança no toggle
    fixture.detectChanges();

    expect(document.body.classList.contains(Theme.Dark)).toBeTruthy();
    expect(localStorage.getItem('theme')).toBe(Theme.Dark);
  });

  it('should remove dark theme when toggle is unchecked', () => {
    // Primeiro, ativa o tema escuro
    toggle.checked = true;
    toggle.change.emit({} as MatSlideToggleChange);
    fixture.detectChanges();

    // Agora, desativa o tema escuro
    toggle.checked = false;
    toggle.change.emit({} as MatSlideToggleChange);
    fixture.detectChanges();

    expect(document.body.classList.contains(Theme.Dark)).toBeFalsy();
    expect(localStorage.getItem('theme')).toBeNull();
  });

  it('should initialize with dark theme if stored in localStorage', () => {
    // Armazenar a preferência no localStorage antes de recriar o componente
    localStorage.setItem('theme', Theme.Dark);

    // Destrói e recria o componente
    fixture.destroy();
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // Obtém novamente o MatSlideToggle e a diretiva após recriar o componente
    const toggleDebugElement = fixture.debugElement.query(
      By.directive(MatSlideToggle),
    );
    toggle = toggleDebugElement.componentInstance;
    directiveInstance = toggleDebugElement.injector.get(ThemeToggleDirective);

    expect(document.body.classList.contains(Theme.Dark)).toBeTruthy();
    expect(toggle.checked).toBeTruthy();
  });

  it('should update icons on toggle state change', () => {
    const mockSetAttribute = jest.spyOn(
      directiveInstance['renderer'],
      'setAttribute',
    );

    // Simula a troca de estado do toggle
    toggle.checked = true;
    toggle.change.emit({} as MatSlideToggleChange);
    fixture.detectChanges();

    const div = toggle._switchElement.nativeElement;

    // Verifica se o ícone da Lua foi definido corretamente
    expect(mockSetAttribute).toHaveBeenCalledWith(
      div,
      'aria-checked',
      'true',
      undefined,
    );

    toggle.checked = false;
    toggle.change.emit({} as MatSlideToggleChange);
    fixture.detectChanges();

    // Verifica se o ícone do Sol foi definido corretamente
    expect(mockSetAttribute).toHaveBeenCalledWith(
      div,
      'aria-checked',
      'true',
      undefined,
    );
  });
});
