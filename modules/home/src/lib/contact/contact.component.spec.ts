import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('input name', () => {
    const controlName = 'name';

    it('form must not have error', () => {
      const nameInput = getElementAndSetValueControl(
        controlName,
        'George Victor',
      );

      expect(nameInput.classList).not.toContain('error');
    });

    it('form has error required', () => {
      const nameInput = getElementAndSetValueControl(controlName, '');

      expect(nameInput.classList).toContain('error');
    });

    it('form has error minLength', () => {
      const nameInput = getElementAndSetValueControl(controlName, 'g');

      expect(nameInput.classList).toContain('error');
    });

    it('form has error maxLength', () => {
      const nameInput = getElementAndSetValueControl(
        controlName,
        'g'.repeat(33),
      );

      expect(nameInput.classList).toContain('error');
    });
  });

  describe('input email', () => {
    const controlEmail = 'email';

    it('form must not have error', () => {
      const nameInput = getElementAndSetValueControl(
        controlEmail,
        'george@mail.com',
      );

      expect(nameInput.classList).not.toContain('error');
    });

    it('form has error required', () => {
      const emailInput = getElementAndSetValueControl(controlEmail, '');

      expect(emailInput.classList).toContain('error');
    });

    it('form has error minLength', () => {
      const emailInput = getElementAndSetValueControl(controlEmail, 'george');

      expect(emailInput.classList).toContain('error');
    });
  });

  describe('textarea message', () => {
    const controlMessage = 'message';

    it('form must not have error', () => {
      const nameInput = getElementAndSetValueControl(
        controlMessage,
        'Mensagem de teste',
        'textarea',
      );

      expect(nameInput.classList).not.toContain('error');
    });

    it('form has error required', () => {
      const messageInput = getElementAndSetValueControl(
        controlMessage,
        '',
        'textarea',
      );

      expect(messageInput.classList).toContain('error');
    });

    it('form has error minLength', () => {
      const messageInput = getElementAndSetValueControl(
        controlMessage,
        'geor',
        'textarea',
      );

      expect(messageInput.classList).toContain('error');
    });
  });

  it('should call send method', () => {
    const spyConsole = jest.spyOn(console, 'log');
    component.send();

    expect(spyConsole).toHaveBeenCalled();
  });

  function getElementAndSetValueControl(
    controlName: string,
    value: string,
    typeElement: 'input' | 'textarea' = 'input',
  ) {
    const element = fixture.debugElement.query(
      By.css(`${typeElement}[formControlName="${controlName}"]`),
    ).nativeElement;

    component.form.controls[controlName].setValue(value);
    component.form.controls[controlName].markAsTouched();

    fixture.detectChanges();

    return element;
  }
});
