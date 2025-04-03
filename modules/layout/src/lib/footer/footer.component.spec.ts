import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Verificar a presença de atributos ARIA
  it('should have the correct aria-label', () => {
    const footer: HTMLElement = fixture.nativeElement.querySelector('footer');
    expect(footer.getAttribute('aria-label')).toBe(
      'Informações sobre a ASCEPA',
    );
  });

  it('should have the arial-label attribute in the link to Tech Experts', () => {
    const link: HTMLElement =
      fixture.nativeElement.querySelector('.footer-link');
    expect(link.getAttribute('aria-label')).toBe(
      'Tech Experts, abre em nova aba',
    );
  });

  // Validar a presença da classe sr-only
  it('should contain accessible text hidden with sr-only class', () => {
    const srOnlyElement = fixture.nativeElement.querySelector('.sr-only');
    expect(srOnlyElement).toBeTruthy();
    expect(srOnlyElement.textContent.trim()).toBe('Tech Experts');
  });

  // Garantir que o link externo tem os atributos de segurança
  it('should have external link attributes', () => {
    const link: HTMLElement =
      fixture.nativeElement.querySelector('.footer-link');
    expect(link.getAttribute('target')).toBe('_blank');
    expect(link.getAttribute('rel')).toBe('noopener noreferrer');
  });

  // Verficar a renderização dinâmica do ano atual
  it('should render the current year', () => {
    const currentYear = new Date().getFullYear();
    const yearElement: HTMLElement =
      fixture.nativeElement.querySelector('.footer-copyright');
    expect(yearElement.textContent).toContain(`Copyright © ${currentYear}`);
  });
});
