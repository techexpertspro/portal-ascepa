import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { By } from '@angular/platform-browser';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Label test', () => {
    it('should display the label', () => {
      component.label = 'Test Label';
      fixture.detectChanges();
      const label = fixture.debugElement.query(
        By.css('.btn-primary'),
      ).nativeElement;

      expect(label.textContent.trim()).toBe(component.label);
    });

    it('should display a empty label', () => {
      component.label = '';
      fixture.detectChanges();
      const label = fixture.debugElement.query(
        By.css('.btn-primary'),
      ).nativeElement;

      expect(label.textContent.trim()).toBe(component.label);
    });
  });

  describe('should display the button with different class', () => {
    it('should apply primary class by default', () => {
      component.type = 'primary';
      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      expect(button.classList).toContain('btn-primary');
    });

    it('should apply secondary class when type is secondary', () => {
      component.type = 'secondary';
      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      expect(button.classList).toContain('btn-secondary');
      expect(button.classList).not.toContain('btn-primary');
    });

    it('should apply disabled class when button are disabled', () => {
      component.type = 'secondary';
      component.disabled = true;
      fixture.detectChanges();

      const button = fixture.debugElement.query(By.css('button')).nativeElement;
      expect(button.classList).toContain('btn-disabled');
      expect(button.classList).not.toContain('btn-secondary');
      expect(button.classList).not.toContain('btn-primary');
    });
  });

  describe('should dispatch event on click', () => {
    it('should emit click event', () => {
      const spy = jest.spyOn(component.eventClick, 'emit');
      component.onDispatchEventClick();
      expect(spy).toHaveBeenCalled();
    });

    it('should not emit click event when disabled', () => {
      const spy = jest.spyOn(component.eventClick, 'emit');
      component.disabled = true;
      fixture.detectChanges();
      component.onDispatchEventClick();
      expect(spy).not.toHaveBeenCalled();
    });
  });

  it('should have no accessibility violations', async () => {
    component.label = 'Test Label';
    fixture.detectChanges();
    const results = await axe(fixture.nativeElement);
    expect(results).toHaveNoViolations();
  });
});
