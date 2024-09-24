import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('deve renderizar um botão básico por padrão', () => {
    component.label = 'raised button';
    fixture.detectChanges();
    const buttonDebugElement = fixture.debugElement.query(
      By.css('button[mat-raised-button]'),
    );
    expect(buttonDebugElement).toBeTruthy();
    expect(buttonDebugElement.nativeElement.textContent).toContain(
      'raised button',
    );
  });

  it('deve renderizar um botão ícone quando a variante é "icon"', () => {
    component.icon = 'home';
    component.ariaLabel = 'Abrir Menu';
    fixture.detectChanges();
    const matIconElement = fixture.debugElement.query(By.css('mat-icon'));
    expect(matIconElement.nativeElement.textContent).toContain('home');
  });

  it('deve emitir evento de clique quando o botão é clicado', () => {
    const submitEmitSpy = jest.spyOn(component.submmit, 'emit');
    component.label = 'Clique Aqui';
    fixture.detectChanges();
    const buttonDebugElement = fixture.debugElement.query(By.css('button'));
    buttonDebugElement.triggerEventHandler('click', {});
    expect(submitEmitSpy).toHaveBeenCalled();
  });

  it('não deve emitir evento de clique quando o botão está desabilitado', () => {
    const submitEmitSpy = jest.spyOn(component.submmit, 'emit');
    component.disabled = true;
    component.label = 'Botão Desabilitado';
    fixture.detectChanges();
    const buttonDebugElement = fixture.debugElement.query(By.css('button'));
    buttonDebugElement.triggerEventHandler('click', {});
    expect(submitEmitSpy).not.toHaveBeenCalled();
  });
});
